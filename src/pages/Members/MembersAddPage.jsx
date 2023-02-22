import React from 'react'
import MembersAdd from '../../components/Members-Add/Members-Add'
import MembersCSS from "./MembersPage.module.css"
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function MembersAddPage() {
  return (
    <div className={MembersCSS.Container}>
      <Sidebar page="members" />
      <main className={MembersCSS.addMain}>
        <MembersAdd />
      </main>
    </div>
  )
}
