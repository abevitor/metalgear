import type { ReactNode } from 'react'
import './StatusCard.css'

interface StatusCardProps {
    label: string;
    value: string;
    description?: string;
    icon?: ReactNode;
    status?: 'online' | 'warning' | 'offline'
}

export function StatusCard({
    label,
    value,
    description,
    icon,
    status = 'online',
}: StatusCardProps){
    return (
        <div className="status-card">
      <div className="status-card-top">
        <span className="status-card-label">{label}</span>

        {icon && <span className="status-card-icon">{icon}</span>}
      </div>

      <div className="status-card-value">
        <span className={`status-card-indicator ${status}`} />
        <strong>{value}</strong>
      </div>

      {description && (
        <p className="status-card-description">{description}</p>
      )}

      <div className="status-card-corner status-card-corner-tl" />
      <div className="status-card-corner status-card-corner-br" />
    </div>
    )
}