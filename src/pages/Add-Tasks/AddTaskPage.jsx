import React from 'react'
import taskpagecss from './AddTaskPage.module.css'
import Sidebar from '../../components/Sidebar/Sidebar-menu'
import Searchbar from '../../components/Searchbar/Searchbar'
import AddTask from '../../components/addTask/AddTask'

export default function AddTaskPage() {
    return (
        <div className={taskpagecss.container}>
            <Sidebar page="pslist" />
            <main className={taskpagecss.main}>
                < AddTask/>
            </main>
        </div>
    )
}
