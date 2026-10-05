import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'

import {
  equipment,
  type EquipmentItem,
} from '../data/equipment'

import { EquipmentCard } from '../components/EquipmentCard/EquipmentCard'

import './Equipment.css'

type EquipmentFilter =
  | 'ALL'
  | 'WEAPONS'
  | 'GEAR'
  | 'COMMUNICATION'
  | 'TECHNOLOGY'

export function Equipment() {
  const [filter, setFilter] =
    useState<EquipmentFilter>('ALL')

  const [searchTerm, setSearchTerm] =
    useState('')

  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentItem | null>(null)

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchesFilter =
        filter === 'ALL' ||
        item.category === filter

      const search =
        searchTerm.trim().toLowerCase()

      const matchesSearch =
        search === '' ||
        item.id.toLowerCase().includes(search) ||
        item.name.toLowerCase().includes(search) ||
        item.operator.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)

      return matchesFilter && matchesSearch
    })
  }, [filter, searchTerm])

  return (
    <div className="equipment-page">
      {/* =========================
          HEADER
          ========================= */}

      <section className="equipment-heading">
        <div>
          <span>
            FOXHOUND TACTICAL EQUIPMENT NETWORK
          </span>

          <h2>EQUIPMENT</h2>

          <p>
            FIELD EQUIPMENT AND TECHNOLOGY DATABASE // ACCESS LEVEL: OMEGA
          </p>
        </div>

        <div className="equipment-counter">
          <span>REGISTERED EQUIPMENT</span>

          <strong>
            {equipment.length
              .toString()
              .padStart(2, '0')}
          </strong>
        </div>
      </section>

      {/* =========================
          DIVIDER
          ========================= */}

      <div className="equipment-divider">
        <span />

        <small>01 // EQUIPMENT INVENTORY</small>

        <span />
      </div>

      {/* =========================
          SEARCH
          ========================= */}

      <section className="equipment-search-area">
        <div className="equipment-search-box">
          <Search size={15} />

          <input
            type="text"
            placeholder="SEARCH EQUIPMENT DATABASE..."
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

        <div className="equipment-search-count">
          <span>RESULTS</span>

          <strong>
            {filteredEquipment.length
              .toString()
              .padStart(2, '0')}
          </strong>
        </div>
      </section>

      {/* =========================
          FILTERS
          ========================= */}

      <section className="equipment-filters">
        <span>EQUIPMENT CATEGORY</span>

        <div>
          {(
            [
              'ALL',
              'WEAPONS',
              'GEAR',
              'COMMUNICATION',
              'TECHNOLOGY',
            ] as EquipmentFilter[]
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

      <section className="equipment-grid">
        {filteredEquipment.map((item) => (
          <EquipmentCard
            key={item.id}
            item={item}
            onClick={() =>
              setSelectedEquipment(item)
            }
          />
        ))}
      </section>

      {/* =========================
          EMPTY
          ========================= */}

      {filteredEquipment.length === 0 && (
        <div className="equipment-empty">
          <span>NO EQUIPMENT FOUND</span>

          <strong>
            ADJUST SEARCH OR FILTER PARAMETERS
          </strong>
        </div>
      )}

      {/* =========================
          MODAL
          ========================= */}

      {selectedEquipment && (
        <div
          className="equipment-modal-overlay"
          onClick={() =>
            setSelectedEquipment(null)
          }
        >
          <div
            className="equipment-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="equipment-modal-close"
              type="button"
              onClick={() =>
                setSelectedEquipment(null)
              }
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* HEADER */}

            <div className="equipment-modal-header">
              <div>
                <span>
                  FOXHOUND // EQUIPMENT FILE
                </span>

                <h3>
                  {selectedEquipment.name}
                </h3>
              </div>

              <div>
                <span>RECORD</span>

                <strong>
                  {selectedEquipment.id}
                </strong>
              </div>
            </div>

            {/* STATUS */}

            <div className="equipment-modal-status">
              <div>
                <span>STATUS</span>

                <strong
                  className={`equipment-modal-${selectedEquipment.status.toLowerCase()}`}
                >
                  {selectedEquipment.status}
                </strong>
              </div>

              <div>
                <span>CLASSIFICATION</span>

                <strong>
                  {selectedEquipment.classification}
                </strong>
              </div>

              <div>
                <span>CATEGORY</span>

                <strong>
                  {selectedEquipment.category}
                </strong>
              </div>
            </div>

            {/* OPERATIVE */}

            <div className="equipment-modal-operative">
              <span>ASSIGNED TO</span>

              <strong>
                {selectedEquipment.operator}
              </strong>
            </div>

            {/* DESCRIPTION */}

            <div className="equipment-modal-section">
              <span>EQUIPMENT DESCRIPTION</span>

              <p>
                {selectedEquipment.description}
              </p>
            </div>

            {/* SPECIFICATIONS */}

            <div className="equipment-modal-specifications">
              <div className="equipment-specifications-header">
                <span>TECHNICAL SPECIFICATIONS</span>
                <span>SECURE</span>
              </div>

              {selectedEquipment.specifications.map(
                (specification) => (
                  <p key={specification}>
                    &gt; {specification}
                  </p>
                ),
              )}
            </div>

            {/* TERMINAL */}

            <div className="equipment-modal-terminal">
              <p>
                &gt; EQUIPMENT RECORD ACCESSED
              </p>

              <p>
                &gt; SECURITY CLEARANCE VERIFIED
              </p>

              <p>
                &gt; DEVICE STATUS:{' '}
                {selectedEquipment.status}
              </p>

              <p>
                &gt; CONNECTION: SECURE_
              </p>
            </div>

            {/* FOOTER */}

            <div className="equipment-modal-footer">
              <span>
                FOXHOUND EQUIPMENT NETWORK
              </span>

              <span>
                END OF EQUIPMENT FILE
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}