import React from 'react'
import ItemTask from '../../components/Items/ItemTask'
import ItemsTasksCSS from './Items-Tasks.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function ItemsTasksPage() {
  return (
    <div>
        <Sidebar />
      <main className={ItemsTasksCSS.container}>
        <ItemTask />
      </main>
    </div>
  )
}

