import React from 'react'
import AddMembersCSS from './Add-Members.module.css'
import MembersAdd from '../../components/Members-Add/Members-Add'

export default function AddMembers() {
  return (
      <div className={AddMembersCSS.container}>
          <MembersAdd />
    </div>
  )
}
