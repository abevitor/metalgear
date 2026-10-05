import { 
    Crosshair,
    Radio,
    Shield,
    Wrench,
} from 'lucide-react'

import type { EquipmentItem } from '../../data/equipment'

import './EquipmentCard.css'

interface EquipmentCardProps {
    item: EquipmentItem
    onClick: () => void
}

const categoryIcons = {
    WEAPONS: Crosshair,
    GEAR: Shield,
    COMMUNICATION: Radio,
    TECHNOLOGY: Wrench,
}

export function EquipmentCard({
    item,
    onClick,
}: EquipmentCardProps) {
    const Icon = categoryIcons[item.category]

     return (
    <button
      className="equipment-card"
      type="button"
      onClick={onClick}
    >
      <div className="equipment-card-header">
        <div className="equipment-card-id">
          {item.id}
        </div>

        <div className="equipment-card-status">
          <span
            className={`equipment-status-dot equipment-status-dot-${item.status.toLowerCase()}`}
          />

          <span
            className={`equipment-status-text equipment-status-text-${item.status.toLowerCase()}`}
          >
            {item.status}
          </span>
        </div>
      </div>

      <div className="equipment-card-icon">
        <Icon size={30} />
      </div>

      <div className="equipment-card-content">
        <span className="equipment-card-category">
          {item.category}
        </span>

        <strong>{item.name}</strong>

        <span className="equipment-card-operator">
          OPERATOR: {item.operator}
        </span>
      </div>

      <div className="equipment-card-bottom">
        <div>
          <span>CLASSIFICATION</span>
          <strong>{item.classification}</strong>
        </div>

        <div>
          <span>CONDITION</span>
          <strong>{item.condition}</strong>
        </div>
      </div>

      <div className="equipment-card-footer">
        <span>ACCESS EQUIPMENT FILE</span>
        <span>→</span>
      </div>

      <div className="equipment-card-corner equipment-card-corner-tl" />
      <div className="equipment-card-corner equipment-card-corner-br" />
    </button>
  )
}