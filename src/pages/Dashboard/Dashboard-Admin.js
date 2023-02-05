import React from 'react'
import DashboardAdminCSS from './Dashboard-admin.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
// import Searchbar from '../../components/Searchbar/Searchbar'

export default function DashboardAdmin() {
  return (
    <div className={DashboardAdminCSS.container}>
        <Sidebar />
      <main>
      <aside className={DashboardAdminCSS.stats}>
      </aside>
        {/* <Searchbar /> */}
      </main>
    </div>
  )
}

