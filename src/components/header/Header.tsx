import { Activity, Lock } from 'lucide-react'

import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <span>FOXHOUND</span>
        <strong>// COMMAND CENTER</strong>
      </div>

      <div className="header-status">
        <div className="status-item">
          <Activity size={14} />
          <span>SYSTEM: ONLINE</span>
        </div>

        <div className="status-item">
          <Lock size={13} />
          <span>SECURE CHANNEL</span>
        </div>
      </div>
    </header>
  )
}