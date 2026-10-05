import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'

import {
    intelligenceRecords,
    type intelligenceRecord,
} from '../data/intelligence'

import { IntelligenceCard } from '../components/IntelligenceCard/IntelligenceCard'

import './Intelligence.css'

type IntelligenceFilter =
    | 'ALL'
    | 'PERSONNEL'
    | 'OPERATIONS'
    | 'LOCATIONS'
    | 'EVENTS'

export function Intelligence() {
    const [filter, setFilter] =
        useState<IntelligenceFilter>('ALL')

    const [searchTerm, setSearchTerm] =
        useState('')

    const [selectedRecord, setSelectedRecord] =
        useState<intelligenceRecord | null>(null)

    const filteredRecords = useMemo(() => {
        return intelligenceRecords.filter((record) => {
            const matchesFilter = filter === 'ALL' || record.category === filter

            const search = searchTerm.trim().toLowerCase()

            const matchesSearch =
                search === '' ||
                record.id.toLowerCase().includes(search) ||
                record.title.toLowerCase().includes(search) ||
                record.subject.toLowerCase().includes(search) ||
                record.category.toLowerCase().includes(search)

                return matchesFilter && matchesSearch

        })
    }, [filter, searchTerm])

     return (
    <div className="intelligence-page">
      {/* =========================
          HEADER
          ========================= */}

      <section className="intelligence-heading">
        <div>
          <span>
            FOXHOUND CLASSIFIED INFORMATION NETWORK
          </span>

          <h2>INTELLIGENCE</h2>

          <p>
            STRATEGIC INTELLIGENCE DATABASE // ACCESS LEVEL: OMEGA
          </p>
        </div>

        <div className="intelligence-counter">
          <span>DATABASE RECORDS</span>

          <strong>
            {intelligenceRecords.length
              .toString()
              .padStart(2, '0')}
          </strong>
        </div>
      </section>

      {/* =========================
          DIVIDER
          ========================= */}

      <div className="intelligence-divider">
        <span />

        <small>01 // CLASSIFIED DATABASE</small>

        <span />
      </div>

      {/* =========================
          SEARCH
          ========================= */}

      <section className="intelligence-search-area">
        <div className="intelligence-search-box">
          <Search size={15} />

          <input
            type="text"
            placeholder="SEARCH CLASSIFIED DATABASE..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="intelligence-search-count">
          <span>RESULTS</span>

          <strong>
            {filteredRecords.length
              .toString()
              .padStart(2, '0')}
          </strong>
        </div>
      </section>

      {/* =========================
          FILTERS
          ========================= */}

      <section className="intelligence-filters">
        <span>FILE CATEGORY</span>

        <div>
          {(
            [
              'ALL',
              'PERSONNEL',
              'OPERATIONS',
              'LOCATIONS',
              'EVENTS',
            ] as IntelligenceFilter[]
          ).map((filterOption) => (
            <button
              key={filterOption}
              type="button"
              className={
                filter === filterOption
                  ? 'active'
                  : ''
              }
              onClick={() =>
                setFilter(filterOption)
              }
            >
              {filterOption}
            </button>
          ))}
        </div>
      </section>

      {/* =========================
          GRID
          ========================= */}

      <section className="intelligence-grid">
        {filteredRecords.map((record) => (
          <IntelligenceCard
            key={record.id}
            record={record}
            onClick={() =>
              setSelectedRecord(record)
            }
          />
        ))}
      </section>

      {/* =========================
          EMPTY STATE
          ========================= */}

      {filteredRecords.length === 0 && (
        <div className="intelligence-empty">
          <span>NO CLASSIFIED RECORDS FOUND</span>

          <strong>
            ADJUST SEARCH OR FILTER PARAMETERS
          </strong>
        </div>
      )}

      {/* =========================
          MODAL
          ========================= */}

      {selectedRecord && (
        <div
          className="intelligence-modal-overlay"
          onClick={() =>
            setSelectedRecord(null)
          }
        >
          <div
            className="intelligence-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="intelligence-modal-close"
              type="button"
              onClick={() =>
                setSelectedRecord(null)
              }
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* MODAL HEADER */}

            <div className="intelligence-modal-header">
              <div>
                <span>
                  FOXHOUND // CLASSIFIED FILE
                </span>

                <h3>
                  {selectedRecord.title}
                </h3>
              </div>

              <div>
                <span>FILE ID</span>

                <strong>
                  {selectedRecord.id}
                </strong>
              </div>
            </div>

            {/* MODAL INFO */}

            <div className="intelligence-modal-info">
              <div>
                <span>CATEGORY</span>

                <strong>
                  {selectedRecord.category}
                </strong>
              </div>

              <div>
                <span>CLASSIFICATION</span>

                <strong>
                  {selectedRecord.classification}
                </strong>
              </div>

              <div>
                <span>STATUS</span>

                <strong>
                  {selectedRecord.status}
                </strong>
              </div>

              <div>
                <span>DATE</span>

                <strong>
                  {selectedRecord.date}
                </strong>
              </div>
            </div>

            {/* SUBJECT */}

            <div className="intelligence-modal-subject">
              <span>SUBJECT</span>

              <strong>
                {selectedRecord.subject}
              </strong>
            </div>

            {/* SUMMARY */}

            <div className="intelligence-modal-section">
              <span>INTELLIGENCE SUMMARY</span>

              <p>
                {selectedRecord.summary}
              </p>
            </div>

            {/* DOCUMENT */}

            <div className="intelligence-modal-document">
              <div className="intelligence-document-header">
                <span>DOCUMENT CONTENT</span>
                <span>SECURE</span>
              </div>

              <p>
                {selectedRecord.document}
              </p>

              <p>
                ████████████████████████████████████
              </p>

              <p>
                &gt; SECURITY CLEARANCE VERIFIED
              </p>

              <p>
                &gt; ACCESSING CLASSIFIED DATA
              </p>

              <p>
                &gt; RECORD: {selectedRecord.id}
              </p>
            </div>

            {/* FOOTER */}

            <div className="intelligence-modal-footer">
              <span>
                FOXHOUND INTELLIGENCE NETWORK
              </span>

              <span>
                END OF FILE
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

