import React from 'react'
import AddIssue from '../../components/itemsAdd/Add-Issue'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function AddItemsIssuePage() {
  return (
      <div>
          <Sidebar />
          <main>
          <AddIssue />              
          </main>
    </div>
  )
}
