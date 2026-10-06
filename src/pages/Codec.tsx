import { useState } from 'react'
import { 
   MessageSquare,
   Radio,
   ShieldCheck,
} from 'lucide-react'

import { 
   codecContacts,
   radioStation,
   type CodecContact,
} from '../data/codec'

import { RadioPlayer } from '../components/RadioPlayer/RadioPlayer'

import './Codec.css'

export function Codec() {
   const [selectedContact, setSelectedContact] =
   useState<CodecContact>(codecContacts[0])

   return (
    <div className="codec-page">
      {/* =========================
          HEADER
          ========================= */}

      <section className="codec-heading">
        <div>
          <span>
            FOXHOUND SECURE COMMUNICATION NETWORK
          </span>

          <h2>CODEC</h2>

          <p>
            TACTICAL COMMUNICATIONS // ENCRYPTION ACTIVE
          </p>
        </div>

        <div className="codec-heading-status">
          <ShieldCheck size={18} />

          <div>
            <span>CHANNEL SECURITY</span>
            <strong>ENCRYPTED</strong>
          </div>
        </div>
      </section>

      {/* =========================
          DIVIDER
          ========================= */}

      <div className="codec-divider">
        <span />

        <small>01 // COMMUNICATIONS NETWORK</small>

        <span />
      </div>

      {/* =========================
          MAIN LAYOUT
          ========================= */}

      <section className="codec-layout">
        {/* CONTACTS */}

        <aside className="codec-contacts">
          <div className="codec-panel-heading">
            <div>
              <Radio size={14} />

              <span>ACTIVE FREQUENCIES</span>
            </div>

            <strong>
              {codecContacts.length
                .toString()
                .padStart(2, '0')}
            </strong>
          </div>

          <div className="codec-contact-list">
            {codecContacts.map((contact) => (
              <button
                key={contact.id}
                type="button"
                className={`codec-contact ${
                  selectedContact.id === contact.id
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  setSelectedContact(contact)
                }
              >
                <div className="codec-contact-top">
                  <span>{contact.id}</span>

                  <span
                    className={`codec-contact-status codec-contact-status-${contact.status.toLowerCase()}`}
                  >
                    {contact.status}
                  </span>
                </div>

                <strong>{contact.name}</strong>

                <span className="codec-contact-role">
                  {contact.role}
                </span>

                <span className="codec-contact-frequency">
                  {contact.frequency} MHz
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* COMMUNICATION */}

        <main className="codec-main">
          <div className="codec-channel-header">
            <div className="codec-channel-title">
              <MessageSquare size={17} />

              <div>
                <span>SECURE CHANNEL</span>

                <strong>
                  {selectedContact.frequency} MHz
                </strong>
              </div>
            </div>

            <div className="codec-live-status">
              <span />
              CHANNEL ACTIVE
            </div>
          </div>

          <div className="codec-operative">
            <span>CONTACT</span>

            <strong>
              {selectedContact.name}
            </strong>

            <small>
              CODE NAME: {selectedContact.codename}
            </small>
          </div>

          <div className="codec-message-header">
            <span>TRANSMISSION LOG</span>

            <span>
              CLEARANCE: {selectedContact.clearance}
            </span>
          </div>

          <div className="codec-messages">
            {selectedContact.messages.map(
              (message, index) => (
                <div
                  className="codec-message"
                  key={`${message.time}-${index}`}
                >
                  <div className="codec-message-meta">
                    <span>{message.time}</span>

                    <strong>
                      {message.sender}
                    </strong>
                  </div>

                  <p>{message.message}</p>
                </div>
              ),
            )}
          </div>

          <div className="codec-terminal">
            <p>
              &gt; SECURE CHANNEL ESTABLISHED
            </p>

            <p>
              &gt; ENCRYPTION PROTOCOL: ACTIVE
            </p>

            <p>
              &gt; CONTACT: {selectedContact.codename}
            </p>

            <p>
              &gt; FREQUENCY: {selectedContact.frequency} MHz
            </p>

            <p>
              &gt; AWAITING TRANSMISSION_
            </p>
          </div>
        </main>

        {/* RADIO */}

        <aside className="codec-radio-column">
          <RadioPlayer station={radioStation} />

          <div className="codec-frequency-panel">
            <div className="codec-frequency-header">
              <span>FREQUENCY MONITOR</span>

              <Radio size={14} />
            </div>

            <div className="codec-frequency-value">
              <strong>
                {selectedContact.frequency}
              </strong>

              <span>MHz</span>
            </div>

            <div className="codec-signal">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <p>
              SIGNAL: STABLE
            </p>
          </div>

          <div className="codec-footer-panel">
            <span>FOXHOUND CODEC SYSTEM</span>
            <strong>SECURE</strong>
          </div>
        </aside>
      </section>
    </div>
  )
}