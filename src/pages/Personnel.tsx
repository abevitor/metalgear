
import { useCallback, useEffect, useState } from 'react'
import { Pencil, Plus, Save, Trash2, X } from 'lucide-react'

import { PersonnelCard } from '../components/PersonnelCard/PersonnelCard'
import type { Character } from '../data/personnel'
import {
  createPersonnel,
  deletePersonnel,
  getPersonnel,
  updatePersonnel,
  type PersonnelPayload,
} from '../services/personnelService'

import './Personnel.css'

const emptyForm: PersonnelPayload = {
  code: '',
  name: '',
  codename: '',
  affiliation: '',
  status: 'ACTIVE',
  specialty: '',
  cardImage: '',
  modalImage: '',
  history: '',
}

export function Personnel() {
  const [personnelList, setPersonnelList] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState<string | null>(null)

  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>(null)

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCharacter, setEditingCharacter] =
    useState<Character | null>(null)

  const [formData, setFormData] =
    useState<PersonnelPayload>(emptyForm)

  const [formError, setFormError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  // Carrega os registros do MySQL através da API.
  const loadPersonnel = useCallback(async () => {
    try {
      setApiError(null)

      const agents = await getPersonnel()
      setPersonnelList(agents)
    } catch (error) {
      setApiError(
        error instanceof Error
          ? error.message
          : 'Falha ao carregar os agentes.',
      )
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadPersonnel()
  }, [loadPersonnel])

  // Abre o formulário para cadastrar um novo agente.
  function openCreateForm() {
    setEditingCharacter(null)
    setFormData({ ...emptyForm })
    setFormError(null)
    setSelectedCharacter(null)
    setIsFormOpen(true)
  }

  // Abre o formulário preenchido com os dados do agente escolhido.
  function openEditForm(character: Character) {
    setEditingCharacter(character)

    setFormData({
      code: character.id,
      name: character.name,
      codename: character.codename,
      affiliation: character.affiliation,
      status: character.status,
      specialty: character.specialty,
      cardImage: character.cardImage,
      modalImage: character.modalImage,
      history: character.history,
    })

    setFormError(null)
    setSelectedCharacter(null)
    setIsFormOpen(true)
  }

  function closeForm() {
    if (isSaving) return

    setIsFormOpen(false)
    setEditingCharacter(null)
    setFormData({ ...emptyForm })
    setFormError(null)
  }

  // Atualiza um campo do formulário sem perder os outros valores.
  function updateField(
    field: keyof PersonnelPayload,
    value: string,
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))
  }

  // Cadastra ou atualiza de acordo com o modo do formulário.
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setIsSaving(true)
    setFormError(null)

    const payload: PersonnelPayload = {
      code: formData.code.trim(),
      name: formData.name.trim(),
      codename: formData.codename.trim(),
      affiliation: formData.affiliation.trim(),
      status: formData.status.trim(),
      specialty: formData.specialty.trim(),
      cardImage: formData.cardImage.trim(),
      modalImage: formData.modalImage.trim(),
      history: formData.history.trim(),
    }

    try {
      if (editingCharacter) {
        if (editingCharacter.databaseId == null) {
          throw new Error('O agente não possui ID válido no banco.')
        }

        await updatePersonnel(
          editingCharacter.databaseId,
          payload,
        )
      } else {
        await createPersonnel(payload)
      }

      setIsFormOpen(false)
      setEditingCharacter(null)
      setFormData({ ...emptyForm })

      await loadPersonnel()
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : 'Não foi possível salvar o agente.',
      )
    } finally {
      setIsSaving(false)
    }
  }

  // Exclui somente depois da confirmação do usuário.
  async function handleDelete(character: Character) {
    if (character.databaseId == null) {
      setApiError('O agente não possui um ID válido no banco.')
      return
    }

    const confirmed = window.confirm(
      `Deseja realmente excluir ${character.name} (${character.id})?`,
    )

    if (!confirmed) return

    setDeletingId(character.databaseId)
    setApiError(null)

    try {
      await deletePersonnel(character.databaseId)

      setSelectedCharacter(null)
      await loadPersonnel()
    } catch (error) {
      setApiError(
        error instanceof Error
          ? error.message
          : 'Não foi possível excluir o agente.',
      )
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="personnel-page">
      <section className="personnel-heading">
        <div>
          <span>FOXHOUND TACTICAL DATABASE</span>

          <h2>PERSONNEL</h2>

          <p>
            OPERATIVE AND CHARACTER RECORDS // ACCESS LEVEL: OMEGA
          </p>
        </div>

        <div className="personnel-counter">
          <span>DATABASE ENTRIES</span>

          <strong>
            {personnelList.length.toString().padStart(2, '0')}
          </strong>

          <button
            className="personnel-action-button"
            type="button"
            onClick={openCreateForm}
          >
            <Plus size={16} />
            NEW OPERATIVE
          </button>
        </div>
      </section>

      <div className="personnel-divider">
        <span />
        <small>01 // CHARACTER DATABASE</small>
        <span />
      </div>

      {apiError && (
        <p className="personnel-api-message" role="alert">
          ERROR: {apiError}
        </p>
      )}

      <section className="personnel-grid">
        {isLoading && (
          <p className="personnel-api-message">
            LOADING PERSONNEL DATABASE...
          </p>
        )}

        {!isLoading && !apiError && personnelList.length === 0 && (
          <p className="personnel-api-message">
            NO PERSONNEL RECORDS FOUND.
          </p>
        )}

        {!isLoading &&
          !apiError &&
          personnelList.map((character) => (
            <PersonnelCard
              key={character.databaseId ?? character.id}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
      </section>

      {/* Modal de detalhes do personagem */}
      {selectedCharacter && (
        <div
          className="personnel-modal-overlay"
          onClick={() => setSelectedCharacter(null)}
        >
          <div
            className="personnel-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="personnel-modal-close"
              type="button"
              onClick={() => setSelectedCharacter(null)}
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            <div className="personnel-modal-top">
              <span>FOXHOUND // PERSONNEL FILE</span>
              <span>RECORD: {selectedCharacter.id}</span>
            </div>

            <div className="personnel-modal-content">
              <div className="personnel-modal-image">
                {selectedCharacter.modalImage && (
                  <img
                    src={selectedCharacter.modalImage}
                    alt={selectedCharacter.name}
                  />
                )}

                <div className="personnel-modal-static" />
              </div>

              <div className="personnel-modal-info">
                <span className="personnel-modal-classification">
                  CLASSIFIED // PERSONNEL RECORD
                </span>

                <h3>{selectedCharacter.name}</h3>

                <span className="personnel-modal-codename">
                  CODE NAME: {selectedCharacter.codename}
                </span>

                <div className="personnel-data-grid">
                  <div>
                    <span>AFFILIATION</span>
                    <strong>{selectedCharacter.affiliation || 'UNKNOWN'}</strong>
                  </div>

                  <div>
                    <span>STATUS</span>
                    <strong>{selectedCharacter.status || 'UNKNOWN'}</strong>
                  </div>

                  <div>
                    <span>SPECIALTY</span>
                    <strong>{selectedCharacter.specialty || 'UNASSIGNED'}</strong>
                  </div>

                  <div>
                    <span>RECORD ID</span>
                    <strong>{selectedCharacter.id}</strong>
                  </div>
                </div>

                <div className="personnel-history">
                  <span>HISTORY / BIOGRAPHICAL DATA</span>
                  <p>{selectedCharacter.history || 'NO HISTORY AVAILABLE.'}</p>
                </div>

                <div className="personnel-record-actions">
                  <button
                    className="personnel-action-button"
                    type="button"
                    onClick={() => openEditForm(selectedCharacter)}
                  >
                    <Pencil size={15} />
                    EDIT RECORD
                  </button>

                  <button
                    className="personnel-action-button personnel-delete-button"
                    type="button"
                    disabled={deletingId === selectedCharacter.databaseId}
                    onClick={() => void handleDelete(selectedCharacter)}
                  >
                    <Trash2 size={15} />
                    {deletingId === selectedCharacter.databaseId
                      ? 'DELETING...'
                      : 'DELETE RECORD'}
                  </button>
                </div>
              </div>
            </div>

            <div className="personnel-modal-footer">
              <span>FOXHOUND DATABASE</span>
              <span>SECURE CONNECTION</span>
              <span>END OF RECORD</span>
            </div>
          </div>
        </div>
      )}

      {/* Modal de cadastro e edição */}
      {isFormOpen && (
        <div
          className="personnel-modal-overlay"
          onClick={closeForm}
        >
          <div
            className="personnel-editor"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="personnel-editor-header">
              <div>
                <span>FOXHOUND // PERSONNEL MANAGEMENT</span>

                <h3>
                  {editingCharacter
                    ? 'EDIT OPERATIVE'
                    : 'NEW OPERATIVE'}
                </h3>
              </div>

              <button
                className="personnel-modal-close"
                type="button"
                onClick={closeForm}
                aria-label="Fechar formulário"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="personnel-editor-grid">
                <label>
                  <span>RECORD CODE *</span>

                  <input
                    value={formData.code}
                    onChange={(event) =>
                      updateField('code', event.target.value)
                    }
                    placeholder="PF-037"
                    maxLength={20}
                    required
                  />
                </label>

                <label>
                  <span>NAME *</span>

                  <input
                    value={formData.name}
                    onChange={(event) =>
                      updateField('name', event.target.value)
                    }
                    placeholder="SOLID SNAKE"
                    maxLength={255}
                    required
                  />
                </label>

                <label>
                  <span>CODENAME *</span>

                  <input
                    value={formData.codename}
                    onChange={(event) =>
                      updateField('codename', event.target.value)
                    }
                    placeholder="SNAKE"
                    maxLength={255}
                    required
                  />
                </label>

                <label>
                  <span>STATUS</span>

                  <select
                    value={formData.status}
                    onChange={(event) =>
                      updateField('status', event.target.value)
                    }
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="STANDBY">STANDBY</option>
                    <option value="HISTORICAL">HISTORICAL</option>
                    <option value="RETIRED">RETIRED</option>
                    <option value="DECEASED">DECEASED</option>
                    <option value="UNKNOWN">UNKNOWN</option>
                  </select>
                </label>

                <label>
                  <span>AFFILIATION</span>

                  <input
                    value={formData.affiliation}
                    onChange={(event) =>
                      updateField('affiliation', event.target.value)
                    }
                    placeholder="FOXHOUND"
                    maxLength={255}
                  />
                </label>

                <label>
                  <span>SPECIALTY</span>

                  <input
                    value={formData.specialty}
                    onChange={(event) =>
                      updateField('specialty', event.target.value)
                    }
                    placeholder="INFILTRATION / CQC"
                    maxLength={255}
                  />
                </label>

                <label className="personnel-editor-full">
                  <span>CARD IMAGE PATH</span>

                  <input
                    value={formData.cardImage}
                    onChange={(event) =>
                      updateField('cardImage', event.target.value)
                    }
                    placeholder="/images/snake.webp"
                    maxLength={500}
                  />
                </label>

                <label className="personnel-editor-full">
                  <span>MODAL IMAGE PATH</span>

                  <input
                    value={formData.modalImage}
                    onChange={(event) =>
                      updateField('modalImage', event.target.value)
                    }
                    placeholder="/images/snake.webp"
                    maxLength={500}
                  />
                </label>

                <label className="personnel-editor-full">
                  <span>HISTORY / BIOGRAPHICAL DATA</span>

                  <textarea
                    value={formData.history}
                    onChange={(event) =>
                      updateField('history', event.target.value)
                    }
                    rows={5}
                    placeholder="AGENT HISTORY..."
                  />
                </label>
              </div>

              {formError && (
                <p className="personnel-form-error" role="alert">
                  ERROR: {formError}
                </p>
              )}

              <div className="personnel-editor-actions">
                <button
                  className="personnel-action-button"
                  type="button"
                  onClick={closeForm}
                  disabled={isSaving}
                >
                  CANCEL
                </button>

                <button
                  className="personnel-action-button"
                  type="submit"
                  disabled={isSaving}
                >
                  <Save size={15} />
                  {isSaving
                    ? 'SAVING...'
                    : editingCharacter
                      ? 'SAVE CHANGES'
                      : 'CREATE OPERATIVE'}
                </button>
              </div>
            </form>

            <div className="personnel-modal-footer">
              <span>FOXHOUND DATABASE</span>
              <span>AUTHORIZED PERSONNEL ONLY</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
