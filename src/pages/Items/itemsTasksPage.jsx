import React from 'react'
import ItemTask from '../../components/Items/ItemTask'
import ItemsCSS from './Items.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function ItemsTasksPage() {
  return (
    <div className={ItemsCSS.container}>
        <Sidebar page="pslist" />
      <main className={ItemsCSS.main}>
        <ItemTask />
      </main>
    </div>
  )
}
