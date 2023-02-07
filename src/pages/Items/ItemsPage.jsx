import React from 'react'
import Item from '../../components/Items/Item'
import ItemsCSS from './Items.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function ItemsPage() {
  return (
    <div>
        <Sidebar />
      <main className={ItemsCSS.container}>
        <Item />
      </main>
    </div>
  )
}

