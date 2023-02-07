import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles.css'
import LoginPage from './pages/login/LoginPage'
import EnterEmailPage from './pages/login/EnterEmailPage'
import ChangePassPage from './pages/login/ChangePassPage'
import DashboardAdminPage from './pages/Dashboard/DashboardAdminPage'


export default function App() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<LoginPage />} />     
            <Route path='/send-email' element={<EnterEmailPage />} />   
            <Route path='/change-pass' element={<ChangePassPage />} />   
            <Route path='/dashboard' element={<DashboardAdminPage />} />
            {/* <Route path='/asdas' element={<DashboardAdmin />} />  */}
            {/* <Route path='/asdasdas' element={<Test />} /> 
            <Route path='/aadaserterd' element={<AddTest />} /> 
            <Route path='/aadaertsd' element={<Activities />} /> 
            <Route path='/aad34tasd' element={<Members />} /> 
            <Route path='/aad34tasd' element={<AddMembers />} /> 
            <Route path='/aad34tasd' element={<AddTest />} /> 
            <Route path='/aad34tasd' element={<Items />} /> 
            <Route path='/aad34tasd' element={<ItemsTasks />} /> 
            <Route path='/aad34tasd' element={<ItemsIssue />} />  */}
        </Routes>
    </div>
  )
}
