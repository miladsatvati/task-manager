import React from 'react'
import MembersCSS from "./Members.module.css"
import MembersList from '../../components/Members-List/Members-List'

export default function Members() {
  return (
      <div className={MembersCSS.membersContainer}>
          <MembersList />
      </div>
  )
}
