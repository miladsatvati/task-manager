import React from 'react'
import UserProfileCss from './UserProfile.module.css'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function UserProfile() {
    return (
        <div className={UserProfileCss.container}>
            <p className={UserProfileCss.Name}>Name</p>
            <Link to='/MemberProfilePage'>
                <BsFillPersonLinesFill className={UserProfileCss.NameIcon} />
            </Link>

        </div>
    )
}
