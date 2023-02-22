import React from 'react'
import ItemsCSS from './Items.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import ItemChats from '../../components/Items/ItemChats'

export default function ItemsChatsPage() {
  return (
    <div className={ItemsCSS.container}>
        <Sidebar page="pslist" />
      <main className={ItemsCSS.main}>
        <ItemChats />
      </main>
    </div>
  )
}

