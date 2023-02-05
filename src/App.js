import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles.css'
import Login from './components/login/login'
import EnterEmail from './components/login/enter-email'
import ChangePass from './components/login/change-pass'
import DashboardAdmin from './pages/admin-dashbord/dashboard-admin'
import CreatePS from './components/createPS/createPS'
import MemberProfile from './components/memberProfile/MemberProfile'
import ReportsSatr from './components/ReportsStar/ReportsSatr'
import LineGraph from './components/ReportsStar/LineGraph'
import ShowTasks from './components/showTasks/ShowTasks'
import AddTask from './components/addTask/AddTask'
import { AddStage } from './components/schAddStage/AddStage'
export default function App() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<ShowTasks />} />
          <Route path='/as' element={<AddTask />} />
          <Route path='/sdd' element={<ShowTasks />} />
          <Route path='/ww' element={<LineGraph />} />
          <Route path='/wee' element={<ReportsSatr />} />
          <Route path='/adads' element={< MemberProfile />} />
          <Route path='/wdwad' element={<CreatePS />} />
          <Route path='/Login' element={<Login />} />
                
          <Route path='/send-email' element={<EnterEmail />} />   
          <Route path='/change-pass' element={<ChangePass />} />   
          <Route path='/change-pass' element={<DashboardAdmin />} />   
        </Routes>
    </div>
  )
}



