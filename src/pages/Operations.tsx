import { useMemo, useState } from "react";
import { X } from 'lucide-react'

import {
  operations,
  type Operation,
} from '../data/operations'

import { OperationCard } from "../components/OperationCard/OperationCard";

import './Operation.css'

type OperationFilter = 
 | 'ALL'
 | 'ACTIVE'
 | 'STANDBY'
 | 'CLASSIFIED'

 export function Operations() {
  const [filter, setFilter] =
  useState<OperationFilter>('ALL')

  const [selectedOpertaion, setSelectedOperation] =
  useState<Operation | null>(null)

  const filteredOperations = useMemo(() => {
    if(filter === 'ALL') {
      return operations
    }

    return operations.filter(
      (operation) => operation.status === filter
    )
  }, [filter])

   return (
    <div className="operations-page">
      {/* =========================
          HEADER
          ========================= */}

      <section className="operations-heading">
        <div>
          <span>FOXHOUND TACTICAL OPERATIONS NETWORK</span>

          <h2>OPERATIONS</h2>

          <p>
            MISSION CONTROL DATABASE // ACCESS LEVEL: OMEGA
          </p>
        </div>

        <div className="operations-counter">
          <span>REGISTERED OPERATIONS</span>

          <strong>
            {operations.length
              .toString()
              .padStart(2, '0')}
          </strong>
        </div>
      </section>

      {/* =========================
          DIVIDER
          ========================= */}

      <div className="operations-divider">
        <span />

        <small>01 // MISSION DATABASE</small>

        <span />
      </div>

      {/* =========================
          FILTERS
          ========================= */}

      <section className="operations-toolbar">
        <div className="operations-toolbar-title">
          <span>MISSION STATUS FILTER</span>
          <strong>
            {filteredOperations.length
              .toString()
              .padStart(2, '0')}{' '}
            RESULTS
          </strong>
        </div>

        <div className="operations-filters">
          {(
            [
              'ALL',
              'ACTIVE',
              'STANDBY',
              'CLASSIFIED',
            ] as OperationFilter[]
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
          OPERATION GRID
          ========================= */}

      <section className="operations-grid">
        {filteredOperations.map((operation) => (
          <OperationCard
            key={operation.id}
            operation={operation}
            onClick={() =>
              setSelectedOperation(operation)
            }
          />
        ))}
      </section>

      {/* =========================
          EMPTY STATE
          ========================= */}

      {filteredOperations.length === 0 && (
        <div className="operations-empty">
          <span>NO OPERATIONS FOUND</span>
          <strong>
            NO RECORDS MATCH CURRENT FILTER
          </strong>
        </div>
      )}

      {/* =========================
          MODAL
          ========================= */}

      {selectedOpertaion && (
        <div
          className="operation-modal-overlay"
          onClick={() =>
            setSelectedOperation(null)
          }
        >
          <div
            className="operation-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="operation-modal-close"
              type="button"
              onClick={() =>
                setSelectedOperation(null)
              }
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* MODAL HEADER */}

            <div className="operation-modal-header">
              <div>
                <span>FOXHOUND // MISSION FILE</span>

                <h3>
                  {selectedOpertaion.name}
                </h3>
              </div>

              <span className="operation-modal-id">
                {selectedOpertaion.id}
              </span>
            </div>

            {/* MODAL STATUS */}

            <div className="operation-modal-status">
              <div>
                <span>STATUS</span>

                <strong
                  className={`operation-modal-status-${selectedOpertaion.status.toLowerCase()}`}
                >
                  {selectedOpertaion.status}
                </strong>
              </div>

              <div>
                <span>PRIORITY</span>
                <strong>
                  {selectedOpertaion.priority}
                </strong>
              </div>
            </div>

            {/* MODAL DATA */}

            <div className="operation-modal-data">
              <div>
                <span>LOCATION</span>
                <strong>
                  {selectedOpertaion.location}
                </strong>
              </div>

              <div>
                <span>COMMANDER</span>
                <strong>
                  {selectedOpertaion.commander}
                </strong>
              </div>

              <div>
                <span>OBJECTIVE</span>
                <strong>
                  {selectedOpertaion.objective}
                </strong>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="operation-modal-description">
              <span>
                MISSION BRIEFING
              </span>

              <p>
                {selectedOpertaion.description}
              </p>
            </div>

            {/* TERMINAL */}

            <div className="operation-modal-terminal">
              <div>
                <span>FOXHOUND SYSTEM</span>
                <span>LIVE</span>
              </div>

              <p>
                &gt; MISSION FILE ACCESSED
              </p>

              <p>
                &gt; SECURITY CLEARANCE VERIFIED
              </p>

              <p>
                &gt; RECORD: {selectedOpertaion.id}
              </p>

              <p>
                &gt; STATUS: {selectedOpertaion.status}
              </p>
            </div>

            {/* FOOTER */}

            <div className="operation-modal-footer">
              <span>
                FOXHOUND COMMAND NETWORK
              </span>

              <span>
                END OF MISSION FILE
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )

 }