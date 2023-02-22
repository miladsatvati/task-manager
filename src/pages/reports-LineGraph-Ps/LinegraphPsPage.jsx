import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import Searchbar from '../../components/Searchbar/Searchbar'
import LineGraphPs from '../../components/ReportsStar/LineGraphPs'
import LineGraphPsPagecss from './LineGraphPsPage.module.css'

export default function LinegraphPsPage() {
    return (
        <div className={LineGraphPsPagecss.container}>
            <Sidebar />
            <main className={LineGraphPsPagecss.main}>
                <LineGraphPs />
            </main>
        </div>
    )
}
