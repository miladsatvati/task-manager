import React from 'react'
import MembersCSS from "./MembersPage.module.css"
import MembersList from '../../components/Members-List/Members-List'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import Searchbar from "../../components/Searchbar/Searchbar";

export default function MembersPage() {
  return (
    <div className={MembersCSS.Container}>
      <Sidebar page="members" />
      <main className={MembersCSS.main}>
        <Searchbar />
        <MembersList />
      </main>
    </div>
  )
}
