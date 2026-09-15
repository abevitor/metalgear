import { Outlet } from 'react-router-dom'

import { Sidebar } from '../components/Sidebar/Sidebar'
import { Header } from '../components/Header/Header'

import './CommandCenterLayout.css'

export function CommandCenterLayout(){
    return (
        <div className="command-layout">
            <SideBar />
            <main className="command-main"> 
                <Header />
                <section className="command-content">
                    <Outlet />
                </section>
            </main>
        </div>
    )
}