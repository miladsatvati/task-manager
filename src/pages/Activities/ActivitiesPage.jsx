import React from 'react'
import ActivitiesCSS from "./Activities.module.css"
// import Activitiesinfo from '../../components/Activities-Info/Activitie-info'
import Accessdenied from '../../components/Access-Denied/Access-denied';
import Sidebar from "../../components/Sidebar/Sidebar-menu";

export default function ActivitiesPage() {
  return (
    <div >
      <Sidebar />
      <main className={ActivitiesCSS.container}>
      <Accessdenied />
      </main>
    </div>
  )
}
