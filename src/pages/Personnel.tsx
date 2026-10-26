import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import { PersonnelCard } from '../components/PersonnelCard/PersonnelCard'
import type { Character } from '../data/personnel'
import { getPersonnel } from '../services/personnelService'

import './Personnel.css'

export function Personnel() {
  // Agentes recebidos do backend
  const [personnelList, setPersonnelList] = useState<Character[]>([])

  // Estado de carregamento da requisição
  const [isLoading, setIsLoading] = useState(true)

  // Mensagem de erro, caso a requisição falhe
  const [apiError, setApiError] = useState<string | null>(null)

  // Personagem selecionado para abrir o modal
  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>(null)

  // Busca os agentes quando a página é carregada
  useEffect(() => {
    let isActive = true

    async function loadPersonnel() {
      try {
        setIsLoading(true)
        setApiError(null)

        const agents = await getPersonnel()

        if (isActive) {
          setPersonnelList(agents)
        }
      } catch (error) {
        if (isActive) {
          setApiError(
            error instanceof Error
              ? error.message
              : 'Falha ao carregar os agentes.',
          )
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadPersonnel()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <div className="personnel-page">
      {/* HEADER */}
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
        </div>
      </section>

      {/* DIVIDER */}
      <div className="personnel-divider">
        <span />

        <small>01 // CHARACTER DATABASE</small>

        <span />
      </div>

      {/* PERSONNEL GRID */}
      <section className="personnel-grid">
        {isLoading && (
          <p className="personnel-api-message">
            LOADING PERSONNEL DATABASE...
          </p>
        )}

        {!isLoading && apiError && (
          <p className="personnel-api-message" role="alert">
            ERROR: {apiError}
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
              key={character.id}
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
      </section>

      {/* PERSONNEL MODAL */}
      {selectedCharacter && (
        <div
          className="personnel-modal-overlay"
          onClick={() => setSelectedCharacter(null)}
        >
          <div
            className="personnel-modal"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="personnel-modal-close"
              type="button"
              onClick={() => setSelectedCharacter(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* MODAL HEADER */}
            <div className="personnel-modal-top">
              <span>FOXHOUND // PERSONNEL FILE</span>

              <span>
                RECORD: {selectedCharacter.id}
              </span>
            </div>

            {/* MODAL CONTENT */}
            <div className="personnel-modal-content">
              {/* CHARACTER IMAGE */}
              <div className="personnel-modal-image">
                <img
                  src={selectedCharacter.modalImage}
                  alt={selectedCharacter.name}
                />

                <div className="personnel-modal-static" />
              </div>

              {/* CHARACTER INFORMATION */}
              <div className="personnel-modal-info">
                <span className="personnel-modal-classification">
                  CLASSIFIED // PERSONNEL RECORD
                </span>

                <h3>{selectedCharacter.name}</h3>

                <span className="personnel-modal-codename">
                  CODE NAME: {selectedCharacter.codename}
                </span>

                {/* DATA GRID */}
                <div className="personnel-data-grid">
                  <div>
                    <span>AFFILIATION</span>

                    <strong>
                      {selectedCharacter.affiliation}
                    </strong>
                  </div>

                  <div>
                    <span>STATUS</span>

                    <strong>
                      {selectedCharacter.status}
                    </strong>
                  </div>

                  <div>
                    <span>SPECIALTY</span>

                    <strong>
                      {selectedCharacter.specialty}
                    </strong>
                  </div>

                  <div>
                    <span>RECORD ID</span>

                    <strong>
                      {selectedCharacter.id}
                    </strong>
                  </div>
                </div>

                {/* CHARACTER HISTORY */}
                <div className="personnel-history">
                  <span>HISTORY / BIOGRAPHICAL DATA</span>

                  <p>{selectedCharacter.history}</p>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="personnel-modal-footer">
              <span>FOXHOUND DATABASE</span>

              <span>SECURE CONNECTION</span>

              <span>END OF RECORD</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}