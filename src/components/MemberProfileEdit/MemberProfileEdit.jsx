import React, { useEffect, useState } from 'react'
import EditMemberCss from './MemberProfileEdit.module.css'
import { Link } from 'react-router-dom'
import { axiosAPI } from '../../defz'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function MemberProfileEdit() {
    const navigate =useNavigate()

    const [ProfileEditData, setProfileEditData] = useState([])
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [organization, setOrganization] = useState('')

    useEffect(() => {
        axiosAPI(
            'api/user/get/profile',
            '',
            localStorage.getItem('admin-token')
        )

            // .then(res => console.log(res))

            .then((res) => {
                if (res.data.status_code === 200) {
                    setProfileEditData(res.data.data)
                    setUser(res.data.data.user)
                    setEmail(res.data.data.email)
                    setOrganization(res.data.data.organizartion)
                }else{
                    toast.error('Error')
                }
            })

    }, [])

    const postData = {
        user: user,
        email: email,
        organizartion: organization

    }


    const submit = (event) => [
        event.preventDefault(),
        axiosAPI(
            'api/user/edit/profile',
            postData,
            localStorage.getItem("admin-token")
        )
        .then((res) => {
            // console.log(res)
            if(res.data.status_code ===200) {
                toast.success("Done")
                navigate("/PslistPagePage")
            } else {
                toast.error("Error")
            }
        })
    ]
    return (

        <div className={EditMemberCss.container}>
            <h1>Name</h1>
            <div className={EditMemberCss.main}>
                <div className={EditMemberCss.header}>
                    <Link to='/MemberProfile' className={EditMemberCss.Edit}>Back</Link>
                </div>
                <div className={EditMemberCss.mainChild}>
                    <form className={EditMemberCss.profileForm}>
                        <label className={EditMemberCss.item}>
                            User: <input type='text' defaultValue={user} onChange={e => setUser(e.target.value)} />
                        </label >
                        <label className={EditMemberCss.item}>
                            Email: <input type='text' defaultValue={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label className={EditMemberCss.item}>
                            Organization: <input type='text' defaultValue={organization} onChange={e => setOrganization(e.target.value)} />
                        </label>
                        <button onClick={submit}>
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
