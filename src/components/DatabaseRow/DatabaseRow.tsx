import type { DatabaseRecord } from "../../data/database";
import './DatabaseRow.css'

interface DatabaseRowProps {
    record: DatabaseRecord
    onClick: () => void
}

export function DatabaseRow({
    record,
    onClick,
}: DatabaseRowProps) {
   return (
    <button
      className="database-row"
      type="button"
      onClick={onClick}
    >
      <span className="database-row-id">
        {record.id}
      </span>

      <span className="database-row-type">
        {record.type}
      </span>

      <span className="database-row-subject">
        {record.subject}
      </span>

      <span
        className={`database-row-status database-row-status-${record.status.toLowerCase()}`}
      >
        {record.status}
      </span>

      <span className="database-row-classification">
        {record.classification}
      </span>

      <span className="database-row-arrow">
        →
      </span>
    </button>
  )  
}