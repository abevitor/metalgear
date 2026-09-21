import { useState } from 'react'
import { X } from 'lucide-react'

import { PersonnelCard } from '../components/PersonnelCard/PersonnelCard'
import { characters, type Character } from '../data/Personnel'

import './Personnel.css'

export function Personnel() {
  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>(null)

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
          <strong>{characters.length.toString().padStart(2, '0')}</strong>
        </div>
      </section>

      <div className="personnel-divider">
        <span />
        <small>01 // CHARACTER DATABASE</small>
        <span />
      </div>

      <section className="personnel-grid">
        {characters.map((character) => (
          <PersonnelCard
            key={character.id}
            character={character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </section>

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
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="personnel-modal-top">
              <span>FOXHOUND // PERSONNEL FILE</span>
              <span>
                RECORD: {selectedCharacter.id}
              </span>
            </div>

            <div className="personnel-modal-content">
              <div className="personnel-modal-image">
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                />

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
                    <strong>{selectedCharacter.affiliation}</strong>
                  </div>

                  <div>
                    <span>STATUS</span>
                    <strong>{selectedCharacter.status}</strong>
                  </div>

                  <div>
                    <span>SPECIALTY</span>
                    <strong>{selectedCharacter.specialty}</strong>
                  </div>

                  <div>
                    <span>RECORD ID</span>
                    <strong>{selectedCharacter.id}</strong>
                  </div>
                </div>

                <div className="personnel-history">
                  <span>HISTORY / BIOGRAPHICAL DATA</span>

                  <p>{selectedCharacter.history}</p>
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
    </div>
  )
}