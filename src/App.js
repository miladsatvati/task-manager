import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles.css'
import Login from './pages/login/login'
import EnterEmail from './pages/login/enter-email'
import ChangePass from './pages/login/change-pass'
import DashboardAdmin from './pages/Dashboard/Dashboard-Admin'
import Test from './pages/Tests/Test'
import AddTest from './pages/Add-Test/Add-Test'
import Activities from './pages/Activities/Activities'
import Members from './pages/Members/Members'
import AddMembers from './pages/Add-Members/Add-Members'
import Items from './pages/Items/Items'

export default function App() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Items />} />     
            <Route path='/send-email' element={<EnterEmail />} />   
            <Route path='/change-pass' element={<ChangePass />} />   
            <Route path='/change-pass' element={<Login />} />
            <Route path='/asdas' element={<DashboardAdmin />} /> 
            <Route path='/asdasdas' element={<Test />} /> 
            <Route path='/aadaserterd' element={<AddTest />} /> 
            <Route path='/aadaertsd' element={<Activities />} /> 
            <Route path='/aad34tasd' element={<Members />} /> 
            <Route path='/aad34tasd' element={<AddMembers />} /> 
            <Route path='/aad34tasd' element={<AddTest />} /> 
        </Routes>
    </div>
  )
}
