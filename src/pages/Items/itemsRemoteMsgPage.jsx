import React from 'react'
import ItemRemoteMsg from '../../components/Items/ItemRemoteMsg'
import ItemsCSS from './Items.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'

export default function ItemsRemoteMsgPage() {
  return (
    <div className={ItemsCSS.container}>
        <Sidebar page="pslist" />
      <main className={ItemsCSS.main}>
        <ItemRemoteMsg />
      </main>
    </div>
  )
}

