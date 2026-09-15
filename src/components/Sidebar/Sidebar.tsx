// @ts-nocheck
import { NavLink } from "react-router-dom";

import {
    Radio,
    Crosshair,
    Users,
    Eye,
    Database,
    Package,
    MessageSquare,
} from 'lucide-react'

import './Sidebar.css'

const menuItems = [
    {
    label: 'COMMAND CENTER',
    path: '/',
    icon: Crosshair,
    },
    {
        label: 'OPERATIONS',
        path: '/operations',
        icon: Radio,
    },
    {
    label: 'PERSONNEL',
    path: '/personnel',
    icon: Users,
    },
    {
    label: 'INTELLIGENCE',
    path: '/intelligence',
    icon: Eye,
    },
    {
    label: 'EQUIPMENT',
    path: '/equipment',
    icon: Package,
    },
    {
    label: 'CODEC',
    path: '/codec',
    icon: MessageSquare,
    },
]

export function Sidebar() {
    return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-classification">CLASSIFIED</span>

        <h1>FOXHOUND</h1>

        <span className="sidebar-system">
          TACTICAL NETWORK
        </span>
      </div>

      <div className="sidebar-line" />

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <div>FOXHOUND NETWORK</div>
        <div>ENCRYPTION: ACTIVE</div>
        <div>CONNECTION: SECURE</div>
      </div>
    </aside>
    )
}