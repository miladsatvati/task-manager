import React from 'react'
import TestCreate from '../../components/Test-Create/Test-Create'
import AddTestCSS from "./Add-Test.module.css"
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function AddTestPage() {
    return (
    <>
          <Sidebar />
        <div className={AddTestCSS.testContainer}>
          <TestCreate />
        </div>
    </>
  )
}
