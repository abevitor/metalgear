import {
  Activity,
  Database,
  Radio,
  ShieldCheck,
  Users,
} from 'lucide-react'

import { StatusCard } from '../components/StatusCard/StatusCard'
import { TerminalText } from '../components/TerminalText/TerminalText'

import './CommandCenter.css'

const terminalLines = [
  'INITIALIZING FOXHOUND NETWORK...',
  'SECURE CONNECTION ESTABLISHED',
  'TACTICAL DATABASE: ONLINE',
  'ENCRYPTION PROTOCOL: ACTIVE',
  'ACCESS LEVEL: OMEGA',
]

const operations = [
  {
    id: 'OP-001',
    name: 'OPERATION INTRUDE',
    status: 'ACTIVE',
  },
  {
    id: 'OP-002',
    name: 'OPERATION SNAKE EATER',
    status: 'STANDBY',
  },
  {
    id: 'OP-003',
    name: 'SHADOW MOSES RECON',
    status: 'CLASSIFIED',
  },
  {
    id: 'OP-004',
    name: 'PATRIOT SURVEILLANCE',
    status: 'STANDBY',
  },
]

export function CommandCenter() {
  return (
    <div className="command-center-page">
      <section className="command-intro">
        <div className="command-intro-code">
          <span>FOXHOUND TACTICAL OPERATIONS NETWORK</span>
          <span>NODE: COMMAND-01</span>
        </div>

        <div className="command-title-row">
          <div>
            <p className="command-classification">
              CLASSIFIED // LEVEL OMEGA
            </p>

            <h2>COMMAND CENTER</h2>

            <p className="command-subtitle">
              TACTICAL COMMAND AND CONTROL INTERFACE
            </p>
          </div>

          <div className="command-mark">
            <span>FOX</span>
            <strong>HOUND</strong>
          </div>
        </div>
      </section>

      <div className="command-divider">
        <span />
        <small>01 // SYSTEM OVERVIEW</small>
        <span />
      </div>

      <section className="system-grid">
        <StatusCard
          label="SYSTEM STATUS"
          value="OPERATIONAL"
          description="ALL FOXHOUND SYSTEMS NOMINAL"
          icon={<Activity size={14} />}
        />

        <StatusCard
          label="ACTIVE OPERATIONS"
          value="07 ACTIVE"
          description="TACTICAL OPERATIONS CURRENTLY DEPLOYED"
          icon={<Radio size={14} />}
        />

        <StatusCard
          label="PERSONNEL"
          value="24 REGISTERED"
          description="FOXHOUND OPERATIVES IN DATABASE"
          icon={<Users size={14} />}
        />

        <StatusCard
          label="SECURITY"
          value="OMEGA"
          description="MAXIMUM SECURITY PROTOCOL ACTIVE"
          icon={<ShieldCheck size={14} />}
        />
      </section>

      <section className="command-main-grid">
        <div className="command-panel operations-panel">
          <div className="command-panel-header">
            <div>
              <span className="panel-number">02</span>
              <h3>ACTIVE OPERATIONS</h3>
            </div>

            <span className="panel-meta">LIVE FEED</span>
          </div>

          <div className="operation-list">
            {operations.map((operation) => (
              <div className="operation-row" key={operation.id}>
                <div className="operation-info">
                  <span className="operation-id">{operation.id}</span>

                  <div>
                    <strong>{operation.name}</strong>
                    <span>TACTICAL DEPLOYMENT</span>
                  </div>
                </div>

                <span
                  className={`operation-status operation-status-${operation.status.toLowerCase()}`}
                >
                  {operation.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="command-panel terminal-panel">
          <div className="command-panel-header">
            <div>
              <span className="panel-number">03</span>
              <h3>SYSTEM LOG</h3>
            </div>

            <span className="panel-meta">LIVE</span>
          </div>

          <TerminalText lines={terminalLines} speed={22} />
        </div>
      </section>

      <section className="database-strip">
        <div className="database-icon">
          <Database size={15} />
        </div>

        <div>
          <span>FOXHOUND DATABASE</span>
          <strong>DATABASE CONNECTION: ACTIVE</strong>
        </div>

        <div className="database-code">
          DB-FOX-001 // MYSQL // SECURE
        </div>
      </section>

      <footer className="command-footer">
        <span>FOXHOUND COMMAND NETWORK</span>
        <span>ENCRYPTED TRANSMISSION</span>
        <span>SYS.TIME // 14:32:07</span>
      </footer>
    </div>
  )
}