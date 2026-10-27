
import type { Character } from '../data/personnel'

export interface PersonnelPayload {
  code: string
  name: string
  codename: string
  affiliation: string
  status: string
  specialty: string
  cardImage: string
  modalImage: string
  history: string
}

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

function toCharacter(agent: PersonnelApiResponse): Character {
  return {
    id: agent.code,
    databaseId: agent.id,
    name: agent.name,
    codename: agent.codename,
    affiliation: agent.affiliation ?? '',
    status: agent.status ?? '',
    specialty: agent.specialty ?? '',
    cardImage: agent.cardImage ?? '',
    modalImage: agent.modalImage ?? '',
    history: agent.history ?? '',
  }
}

async function parseResponse<T>(response: Response): Promise<T> {
  const responseText = await response.text()

  if (!response.ok) {
    let message = `Erro HTTP ${response.status}.`

    if (responseText.trim()) {
      try {
        const error = JSON.parse(responseText) as ApiErrorResponse

        const fieldMessages = error.fieldErrors
          ? Object.values(error.fieldErrors).join(' ')
          : ''

        message =
          fieldMessages ||
          error.message ||
          message
      } catch {
        message = responseText
      }
    }

    throw new Error(message)
  }

  if (!responseText.trim()) {
    return undefined as T
  }

  return JSON.parse(responseText) as T
}

// GET: listar todos os agentes
export async function getPersonnel(): Promise<Character[]> {
  const response = await fetch('/api/personnel')

  const data = await parseResponse<PersonnelApiResponse[]>(response)

  return data.map(toCharacter)
}

// POST: cadastrar um agente
export async function createPersonnel(
  payload: PersonnelPayload,
): Promise<Character> {
  const response = await fetch('/api/personnel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const agent = await parseResponse<PersonnelApiResponse>(response)

  return toCharacter(agent)
}

// PUT: atualizar um agente
export async function updatePersonnel(
  databaseId: number,
  payload: PersonnelPayload,
): Promise<Character> {
  const response = await fetch(`/api/personnel/${databaseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const agent = await parseResponse<PersonnelApiResponse>(response)

  return toCharacter(agent)
}

// DELETE: excluir um agente
export async function deletePersonnel(
  databaseId: number,
): Promise<void> {
  const response = await fetch(`/api/personnel/${databaseId}`, {
    method: 'DELETE',
  })

  await parseResponse<void>(response)
}
