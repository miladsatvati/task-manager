import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginFooter from './login-footer.js'
import loginCSS from './login.module.css'

export default function Login() {


  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const getUser = (e) => {
    setUser(e.target.value)
  }
  const getPass = (e) => {
    setPass(e.target.value)
  }

function submit() {
  axios.post('https://laboratory-usa.iran.liara.run/api/admin/login', {
    user: user,
    pas: pass
  }).then(res => {
    console.log(res)
  })
}

  return (
    <div >
      <div className={loginCSS.container}>
      <input type='text' onChange={getUser} placeholder='Email'/>
      <input type='password' onChange={getPass} placeholder='Password' />
      <button onClick={submit}>Log In</button>
      <Link id='link' to="/send-email">Forgot Password?</Link>
      <p>The credential you enterd did not match</p>
      </div>  
      <LoginFooter />
    </div>
  )
}
