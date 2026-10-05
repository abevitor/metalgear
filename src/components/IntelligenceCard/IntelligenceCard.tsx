import type { intelligenceRecord } from "../../data/intelligence";
import './IntelligenceCard.css'

interface IntelligenceCardProps {
    record: intelligenceRecord 
    onClick: () => void
}

export function IntelligenceCard ({
 record, 
 onClick,
}: IntelligenceCardProps) {
    return (
         <button
      className="intelligence-card"
      type="button"
      onClick={onClick}
    >
      <div className="intelligence-card-header">
        <span>{record.id}</span>

        <span
          className={`intelligence-status intelligence-status-${record.status.toLowerCase()}`}
        >
          {record.status}
        </span>
      </div>

      <div className="intelligence-card-body">
        <span className="intelligence-card-label">
          CLASSIFIED SUBJECT
        </span>

        <strong>{record.title}</strong>

        <span className="intelligence-card-subject">
          {record.subject}
        </span>
      </div>

      <div className="intelligence-card-meta">
        <div>
          <span>CATEGORY</span>
          <strong>{record.category}</strong>
        </div>

        <div>
          <span>LEVEL</span>
          <strong>{record.classification}</strong>
        </div>
      </div>

      <div className="intelligence-card-footer">
        <span>ACCESS FILE</span>
        <span>→</span>
      </div>

      <div className="intelligence-card-corner intelligence-card-corner-tl" />
      <div className="intelligence-card-corner intelligence-card-corner-br" />
    </button>
    )
}