import { useMemo, useState } from 'react'
import { Database as DatabaseIcon, Search, X } from 'lucide-react'

import {
    databaseRecords,
    type DatabaseRecord,
} from '../data/database'

import { DatabaseRow } from '../components/DatabaseRow/DatabaseRow'

import './Database.css'

type DatabaseFilter = 
  | 'ALL'
  | 'PERSONNEL'
  | 'OPERATIONS'
  | 'EQUIPMENT'
  | 'LOCATION'

  export function Database() {
  const [filter, setFilter] =
    useState<DatabaseFilter>('ALL')

  const [searchTerm, setSearchTerm] =
    useState('')

  const [selectedRecord, setSelectedRecord] =
    useState<DatabaseRecord | null>(null)

  const filteredRecords = useMemo(() => {
    return databaseRecords.filter((record) => {
      const matchesFilter =
        filter === 'ALL' ||
        record.type === filter

      const search =
        searchTerm.trim().toLowerCase()

      const matchesSearch =
        search === '' ||
        record.id.toLowerCase().includes(search) ||
        record.subject.toLowerCase().includes(search) ||
        record.type.toLowerCase().includes(search) ||
        record.status.toLowerCase().includes(search) ||
        record.classification
          .toLowerCase()
          .includes(search)

      return matchesFilter && matchesSearch
    })
  }, [filter, searchTerm])

  return (
    <div className="database-page">
      {/* =========================
          HEADER
          ========================= */}

      <section className="database-heading">
        <div>
          <span>
            FOXHOUND CENTRAL DATABASE SYSTEM
          </span>

          <h2>DATABASE</h2>

          <p>
            CORE DATABASE ACCESS // SECURITY LEVEL: OMEGA
          </p>
        </div>

        <div className="database-heading-status">
          <DatabaseIcon size={19} />

          <div>
            <span>DATABASE STATUS</span>

            <strong>ONLINE</strong>
          </div>
        </div>
      </section>

      {/* =========================
          DIVIDER
          ========================= */}

      <div className="database-divider">
        <span />

        <small>01 // CORE DATABASE</small>

        <span />
      </div>

      {/* =========================
          SEARCH
          ========================= */}

      <section className="database-search-area">
        <div className="database-search-box">
          <Search size={15} />

          <input
            type="text"
            placeholder="SEARCH DATABASE RECORDS..."
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

        <div className="database-result-counter">
          <span>RESULTS</span>

          <strong>
            {filteredRecords.length
              .toString()
              .padStart(2, '0')}
          </strong>
        </div>
      </section>

      {/* =========================
          FILTER
          ========================= */}

      <section className="database-filters">
        <span>RECORD TYPE</span>

        <div>
          {(
            [
              'ALL',
              'PERSONNEL',
              'OPERATIONS',
              'EQUIPMENT',
              'LOCATION',
            ] as DatabaseFilter[]
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
          TABLE HEADER
          ========================= */}

      <section className="database-table">
        <div className="database-table-header">
          <span>ID</span>
          <span>TYPE</span>
          <span>SUBJECT</span>
          <span>STATUS</span>
          <span>LEVEL</span>
          <span />
        </div>

        <div className="database-table-body">
          {filteredRecords.map((record) => (
            <DatabaseRow
              key={record.id}
              record={record}
              onClick={() =>
                setSelectedRecord(record)
              }
            />
          ))}
        </div>
      </section>

      {/* =========================
          EMPTY
          ========================= */}

      {filteredRecords.length === 0 && (
        <div className="database-empty">
          <span>NO DATABASE RECORDS FOUND</span>

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
          className="database-modal-overlay"
          onClick={() =>
            setSelectedRecord(null)
          }
        >
          <div
            className="database-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="database-modal-close"
              type="button"
              onClick={() =>
                setSelectedRecord(null)
              }
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* MODAL HEADER */}

            <div className="database-modal-header">
              <div>
                <span>
                  FOXHOUND // DATABASE RECORD
                </span>

                <h3>
                  {selectedRecord.subject}
                </h3>
              </div>

              <div>
                <span>RECORD ID</span>

                <strong>
                  {selectedRecord.id}
                </strong>
              </div>
            </div>

            {/* META */}

            <div className="database-modal-meta">
              <div>
                <span>TYPE</span>

                <strong>
                  {selectedRecord.type}
                </strong>
              </div>

              <div>
                <span>STATUS</span>

                <strong
                  className={`database-modal-status-${selectedRecord.status.toLowerCase()}`}
                >
                  {selectedRecord.status}
                </strong>
              </div>

              <div>
                <span>CLASSIFICATION</span>

                <strong>
                  {selectedRecord.classification}
                </strong>
              </div>

              <div>
                <span>DATE</span>

                <strong>
                  {selectedRecord.date}
                </strong>
              </div>
            </div>

            {/* SUMMARY */}

            <div className="database-modal-summary">
              <span>RECORD SUMMARY</span>

              <p>
                {selectedRecord.summary}
              </p>
            </div>

            {/* DATA */}

            <div className="database-modal-data">
              <div className="database-modal-data-header">
                <span>RECORD DATA</span>

                <span>SECURE</span>
              </div>

              {selectedRecord.data.map((item) => (
                <p key={item}>
                  &gt; {item}
                </p>
              ))}
            </div>

            {/* TERMINAL */}

            <div className="database-modal-terminal">
              <p>
                &gt; DATABASE CONNECTION VERIFIED
              </p>

              <p>
                &gt; SECURITY CLEARANCE: VERIFIED
              </p>

              <p>
                &gt; RECORD ACCESS: GRANTED
              </p>

              <p>
                &gt; FILE: {selectedRecord.id}
              </p>

              <p>
                &gt; END OF RECORD_
              </p>
            </div>

            {/* FOOTER */}

            <div className="database-modal-footer">
              <span>
                FOXHOUND CENTRAL DATABASE
              </span>

              <span>
                SECURE CONNECTION
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
