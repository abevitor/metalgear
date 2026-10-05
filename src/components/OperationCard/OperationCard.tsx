import type { Operation } from '../../data/operations'
import './OperationCard.css'

interface OperationCardProps {
    operation: Operation
    onClick: () => void
}

export function OperationCard({
    operation,
    onClick,
}: OperationCardProps) {
    return (
        <button
            className="operation-card"
            type="button"
            onClick={onClick}
        >
            <div className="operation-card-top">
                <span className="operation-card-id">
                    {operation.id}
                </span>

                <span
                    className={`operation-card-status operation-card-status-${operation.status.toLowerCase()}`}
                >
                    {operation.status}
                </span>
            </div>

            <div className="operation-card-title">
                <span>MISSION DESIGNATION</span>
                <strong>{operation.name}</strong>
            </div>

            <div className="operation-card-data">
                <div>
                    <span>PRIORITY</span>
                    <strong>{operation.priority}</strong>
                </div>
                <div>
                    <span>LOCATION</span>
                    <strong>{operation.location}</strong>
                </div>

                <div>
                    <span>OBJECTIVE</span>
                    <strong>{operation.objective}</strong>
                </div>

                <div>
                    <span>COMMANDER</span>
                    <strong>{operation.commander}</strong>
                </div>
            </div>

            <div className="operation-card-footer">
                <span>OPEN MISSON FILE</span>
                <span>→</span>
            </div>

            <div className="operation-card-corner operation-card-corner-t1"/>
            <div className="operation-card-corner operation-card-corner-br"/>
        </button>
    )
}