
import { existsSync, readdirSync } from 'node:fs'
import { extname, join } from 'node:path'

import { characters } from '../src/data/personnel'

const API_URL = 'http://localhost:8081/api/personnel'

interface ApiAgent {
  id: number
  code: string
}

interface PersonnelPayload {
  code: string
  name: string
  codename: string
  affiliation: string | null
  status: string | null
  specialty: string | null
  cardImage: string | null
  modalImage: string | null
  history: string | null
}

const imageOverrides: Record<string, string> = {
  '/images/liquidz.jfif': '/images/Liquid.webp',
  '/images/hunter.jfif': '/images/Naomi.webp',
}

const supportedExtensions = new Set([
  '.webp',
  '.jpg',
  '.jpeg',
  '.jfif',
  '.png',
  '.gif',
  '.avif',
  '.svg',
  '.bmp',
])

const warnedImages = new Set<string>()

function resolveImage(
  imagePath: string | null | undefined,
): string | null {
  if (!imagePath?.trim()) {
    return null
  }

  const correctedPath = imageOverrides[imagePath] ?? imagePath

  const imageDirectory = join(
    process.cwd(),
    'public',
    'images',
  )

  if (!existsSync(imageDirectory)) {
    console.warn('Diretório de imagens não encontrado:', imageDirectory)
    return null
  }

  const requestedFilename = correctedPath.split('/').pop()!

  const files = readdirSync(imageDirectory)

  // Procura primeiro pelo nome completo, ignorando maiúsculas/minúsculas.
  const exactMatch = files.find(
    (file) => file.toLowerCase() === requestedFilename.toLowerCase(),
  )

  if (exactMatch) {
    if (supportedExtensions.has(extname(exactMatch).toLowerCase())) {
      // Retorna o nome real do arquivo, com a extensão e capitalização corretas.
      return `/images/${exactMatch}`
    }
  }

  // Se não encontrou o nome completo, tenta outras extensões.
  const requestedBaseName = requestedFilename.replace(/\.[^.]+$/, '')

  const alternativeMatch = files.find((file) => {
    const extension = extname(file).toLowerCase()
    const baseName = file.slice(0, -extname(file).length)

    return (
      baseName.toLowerCase() === requestedBaseName.toLowerCase() &&
      supportedExtensions.has(extension)
    )
  })

  if (alternativeMatch) {
    console.log(
      `[IMAGEM LOCALIZADA] ${requestedFilename} -> ${alternativeMatch}`,
    )

    return `/images/${alternativeMatch}`
  }

  if (!warnedImages.has(imagePath)) {
    console.warn(
      `[IMAGEM AUSENTE OU FORMATO NÃO SUPORTADO] ${imagePath}`,
    )

    warnedImages.add(imagePath)
  }

  return null
}

function optionalText(
  value: string | null | undefined,
): string | null {
  const normalized = value?.trim()
  return normalized || null
}

async function main() {
  console.log('FOXHOUND // PERSONNEL IMPORT')
  console.log(`Personagens encontrados no arquivo: ${characters.length}`)

  // Consulta os registros que já existem no banco.
  const listResponse = await fetch(API_URL)

  if (!listResponse.ok) {
    throw new Error(
      `Não foi possível consultar a API. HTTP ${listResponse.status}`,
    )
  }

  const existingAgents =
    (await listResponse.json()) as ApiAgent[]

  const existingByCode = new Map<string, ApiAgent>(
    existingAgents.map((agent) => [agent.code, agent]),
  )

  // Preserva os códigos originais quando são únicos.
  // Quando um código está repetido, encontra o primeiro código livre.
  const usedCodes = new Set<string>()

  const records = characters.map((character) => {
    let code = character.id.trim()

    if (usedCodes.has(code)) {
      let number = 1

      do {
        code = `PF-${String(number).padStart(3, '0')}`
        number++
      } while (usedCodes.has(code))

      console.warn(
        `[CÓDIGO AJUSTADO] ${character.name.trim()} -> ${code}`,
      )
    }

    usedCodes.add(code)

    return { character, code }
  })

  let created = 0
  let updated = 0
  let failed = 0

  for (const { character, code } of records) {
    const payload: PersonnelPayload = {
      code,
      name: character.name.trim(),
      codename: character.codename.trim(),
      affiliation: optionalText(character.affiliation),
      status: optionalText(character.status),
      specialty: optionalText(character.specialty),
      cardImage: resolveImage(character.cardImage),
      modalImage: resolveImage(character.modalImage),
      history: optionalText(character.history),
    }

    // Se o código já existe, atualiza usando o ID numérico do banco.
    // Caso contrário, cadastra um novo agente.
    const existing = existingByCode.get(code)
    const method = existing ? 'PUT' : 'POST'

    const endpoint = existing
      ? `${API_URL}/${existing.id}`
      : API_URL

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      const responseText = await response.text()

      if (!response.ok) {
        failed++

        console.error(
          `[ERRO ${response.status}] ${payload.name} (${code}):`,
          responseText || 'Resposta sem corpo.',
        )

        continue
      }

      const saved = JSON.parse(responseText) as ApiAgent

      // Mantém o mapa atualizado durante a importação.
      existingByCode.set(saved.code, saved)

      if (method === 'POST') {
        created++
        console.log(`[CRIADO] ${saved.code} - ${payload.name}`)
      } else {
        updated++
        console.log(`[ATUALIZADO] ${saved.code} - ${payload.name}`)
      }
    } catch (error) {
      failed++

      console.error(
        `[FALHA] ${payload.name} (${code}):`,
        error instanceof Error ? error.message : error,
      )
    }
  }

  console.log('\n=== RESULTADO DA IMPORTAÇÃO ===')
  console.log(`Novos registros: ${created}`)
  console.log(`Registros atualizados: ${updated}`)
  console.log(`Falhas: ${failed}`)

  if (failed > 0) {
    process.exitCode = 1
  }
}

main().catch((error: unknown) => {
  console.error(
    'Não foi possível iniciar a importação:',
    error instanceof Error ? error.message : error,
  )

  process.exitCode = 1
})
