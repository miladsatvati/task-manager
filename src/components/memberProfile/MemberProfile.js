import React from 'react'
import MemberCss from './MemberProfile.module.css'
import { Link } from 'react-router-dom'

export default function MemberProfile() {
  return (
    <div className={MemberCss.container}>
        <h1>Name</h1>
        <div className={MemberCss.main}>
            <div className={MemberCss.header}>
                <Link to='#' className={MemberCss.Edit}>Edit</Link>
            </div>
            <div className={MemberCss.mainChild}>
                <form className={MemberCss.profileForm}>
                    <label className={MemberCss.item}>
                        First Name: <input type='text'/>
                    </label >
                    <label className={MemberCss.item}>
                        Last Name: <input type='text'/>
                    </label>
                    <label className={MemberCss.item}>
                        Email: <input type='text'/>
                    </label>
                    <label className={MemberCss.item}>
                        Organization: <input type='text'/>
                    </label>
                </form>
            </div>
        </div>
    </div>
  )
}
