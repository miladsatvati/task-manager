import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import ReportStatusPcss from './ReportsStatusPage.module.css'
import StatusReports from '../../components/ReportsStar/StatusReports'
export default function ReportsStatusPage() {
    return (
        <div className={ReportStatusPcss.container}>
            <Sidebar />
            <main className={ReportStatusPcss.main}>
                <StatusReports />
            </main>
        </div>
    )
}
