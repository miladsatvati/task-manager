import React from 'react'
import ItemIssue from '../../components/Items/ItemIssue'
import ItemsIssuesCSS from './Items-Issues.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function ItemsIssuesPage() {
  return (
    <div>
        <Sidebar />
      <main className={ItemsIssuesCSS.container}>
        <ItemIssue />
      </main>
    </div>
  )
}

