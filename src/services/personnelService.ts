import type { Character } from '../data/personnel'

interface PersonnelApiResponse {
  id: number
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

interface ApiErrorResponse {
  message?: string
  fieldErrors?: Record<string, string>
}

async function getErrorMessage(response: Response): Promise<string> {
  try {
    const error = (await response.json()) as ApiErrorResponse

    const fieldMessages = error.fieldErrors
      ? Object.values(error.fieldErrors).join(' ')
      : ''

    return (
      fieldMessages ||
      error.message ||
      `Erro na API. Código HTTP: ${response.status}`
    )
  } catch {
    return `Não foi possível consultar a API. HTTP ${response.status}.`
  }
}

export async function getPersonnel(): Promise<Character[]> {
  const response = await fetch('/api/personnel')

  if (!response.ok) {
    throw new Error(await getErrorMessage(response))
  }

  const data = (await response.json()) as PersonnelApiResponse[]

  return data.map((agent) => ({
    // Preserva o código exibido nos cards atuais.
    id: agent.code,

    // Guarda também o ID numérico do MySQL.
    databaseId: agent.id,

    name: agent.name,
    codename: agent.codename,
    affiliation: agent.affiliation ?? '',
    status: agent.status ?? '',
    specialty: agent.specialty ?? '',
    cardImage: agent.cardImage ?? '',
    modalImage: agent.modalImage ?? '',
    history: agent.history ?? '',
  }))
}