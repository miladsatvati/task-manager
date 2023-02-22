import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import MemberProfile from '../../components/memberProfile/MemberProfile'
import MemberProfilePGcss from './MemberProfilePage.module.css'

export default function MemberProfilePage() {
    return (
        <div className={MemberProfilePGcss.container}>

            <Sidebar />
            <main className={MemberProfilePGcss.main}>
                <MemberProfile />
            </main>

        </div>
    )
}
