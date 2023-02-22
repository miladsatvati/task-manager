import React from 'react'
import TestCSS from "./TestPage.module.css";
import TestCreate from '../../components/Test-Create/Test-Create'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function CreateTestPage() {
  return (
    <div>
        <Sidebar page="pslist" />
      <main className={TestCSS.testContainer}>
        <TestCreate />
      </main>
    </div>
  )
}
