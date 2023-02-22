import React from 'react'
import CreatePs from '../../components/createPS/createPS'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import createPsPagecss from './CreatePsPage.module.css'

export default function CreatePsPage() {
    return (
        <div className={createPsPagecss.container}>
            <Sidebar page="pslist" />
            <main className={createPsPagecss.main}>
                    <CreatePs />
            </main>
        </div>
    )
}
