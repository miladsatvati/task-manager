import React, { useEffect, useState } from 'react'
import MemberCss from './MemberProfile.module.css'
import { Link } from 'react-router-dom'
import { axiosAPI } from '../../defz'

export default function MemberProfile() {
    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        axiosAPI(
            'api/user/get/profile',
            '',
            localStorage.getItem('admin-token')
        )
        
        .then(res => console.log(res))
        // .then(res => setProfileData(res.data.data))
        
    },[])
    
  return (
    <div className={MemberCss.container}>
        <h1>Name</h1>
        <div className={MemberCss.main}>
            <div className={MemberCss.header}>
                <Link to='/MemberProfileEditPage' className={MemberCss.Edit}>Edit</Link>
            </div>
            <div className={MemberCss.mainChild}>
                <form className={MemberCss.profileForm}>
                    <label className={MemberCss.item}>
                        User: <input type='text' placeholder={`${profileData.user}`} disabled='disabled'/>
                    </label >
                    <label className={MemberCss.item}>
                        Email: <input type='text'  placeholder={`${profileData.email}`} disabled='disabled'/>
                    </label>
                    <label className={MemberCss.item}>
                        Organization: <input type='text'  placeholder={`${profileData.organizartion}`} disabled='disabled'/>
                    </label>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
