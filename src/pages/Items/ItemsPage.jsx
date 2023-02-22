import React from 'react'
import Item from '../../components/Items/Item'
import ItemsCSS from './Items.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function ItemsPage() {
  return (
    <div className={ItemsCSS.container}>
        <Sidebar page="items" />
      <main className={ItemsCSS.main}>
        <Item />
      </main>
    </div>
  )
}

