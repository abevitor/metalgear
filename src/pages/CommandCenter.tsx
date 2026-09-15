import './CommandCenter.css'

export function CommandCenter() {
  return (
    <div className="command-center">
      <div className="page-heading">
        <span>TACTICAL OPERATIONS NETWORK</span>
        <h2>COMMAND CENTER</h2>
      </div>

      <div className="command-line" />

      <section className="system-grid">
        <div className="system-panel">
          <span className="panel-label">SYSTEM STATUS</span>

          <div className="system-status">
            <span className="status-light" />
            <strong>OPERATIONAL</strong>
          </div>

          <p>ALL FOXHOUND SYSTEMS NOMINAL</p>
        </div>

        <div className="system-panel">
          <span className="panel-label">ACTIVE OPERATIONS</span>

          <strong className="panel-number">07</strong>

          <p>TACTICAL OPERATIONS IN PROGRESS</p>
        </div>

        <div className="system-panel">
          <span className="panel-label">PERSONNEL</span>

          <strong className="panel-number">24</strong>

          <p>REGISTERED FOXHOUND OPERATIVES</p>
        </div>
      </section>

      <section className="operations-panel">
        <div className="panel-heading">
          <span>01</span>
          <h3>ACTIVE OPERATIONS</h3>
        </div>

        <div className="operation-row">
          <div>
            <span className="operation-id">OP-001</span>
            <strong>OPERATION INTRUDE</strong>
          </div>

          <span className="operation-status">ACTIVE</span>
        </div>

        <div className="operation-row">
          <div>
            <span className="operation-id">OP-002</span>
            <strong>OPERATION SNAKE EATER</strong>
          </div>

          <span className="operation-status">STANDBY</span>
        </div>

        <div className="operation-row">
          <div>
            <span className="operation-id">OP-003</span>
            <strong>SHADOW MOSES RECON</strong>
          </div>

          <span className="operation-status">CLASSIFIED</span>
        </div>
      </section>
    </div>
  )
}