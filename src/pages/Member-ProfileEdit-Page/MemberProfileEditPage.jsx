import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import MemberProfileEdit from '../../components/MemberProfileEdit/MemberProfileEdit'
import MemberProEcss from './MemberProfileEditPage.module.css'

export default function MemberProfileEditPage() {
    return (
        <div className={MemberProEcss.container}>
            
                <Sidebar />
                <main className={MemberProEcss.main}>
                    <MemberProfileEdit />
                </main>
        </div>
    )
}
