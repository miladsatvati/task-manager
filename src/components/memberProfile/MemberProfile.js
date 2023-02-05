import React from 'react'
import MemberCss from './MemberProfile.module.css'

export default function MemberProfile() {
  return (
    <div className={MemberCss.container}>
        <div className={MemberCss.header}><h1>Name</h1></div>
        <div className={MemberCss.main}>
            <form className={MemberCss.memberForm}>
                <label className={MemberCss.item}>
                    First Name: <input />
                </label >
                <label className={MemberCss.item}>
                    Last Name: <input />
                </label>
                <label className={MemberCss.item}>
                    Email:  <input />
                </label>
                <label className={MemberCss.item}>
                    Organization:  <input />
                </label>
            </form>
        </div>
    </div>
  )
}
