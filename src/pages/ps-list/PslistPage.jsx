import React from 'react'
import PslistPcss from './Pslist.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import Searchbar from '../../components/Searchbar/Searchbar'
import PsList from '../../components/PsList/PsList'
import UserProfile from '../../components/UserProfile/UserProfile'

export default function PslistPage() {
  return (
    <div className={PslistPcss.container}>
        <Sidebar page="pslist" />
        <main className={PslistPcss.main}>
            <header>
                <Searchbar />
                <div className={PslistPcss.prof}>
                <UserProfile />
                </div>
            </header>
            <PsList />
        </main>
    </div>
  )
}
