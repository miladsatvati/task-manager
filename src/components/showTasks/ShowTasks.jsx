import React from 'react'
import tasksCss from './ShowTasks.module.css'
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {ShowTasksData} from './ShowTasksData'

export default function ShowTasks() {
  return (
    <div className={tasksCss.container}>
        <h1>Tasks</h1>
        <div className={tasksCss.main}>
        <div className={tasksCss.addTask}>
                    <AiFillPlusCircle className={tasksCss.plusicon} />
                    <Link to="#">Add Task</Link>
        </div>
        <div className={tasksCss.tableDV}>
            <table className={tasksCss.tasks}>
                <tr className={tasksCss.Info}>
                    <th>no <AiFillCaretDown /></th>
                    <th>Tasks</th>
                    <th>State</th>
                    <th>Deadline</th>
                    <th>Complete</th>
                </tr>
                {ShowTasksData.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{ShowTasksData.length-index}</td>
                            <td>{item.Tasks}</td>
                            <td>{item.State}</td>
                            <td>{item.Deadline}</td>
                            <td><button className={tasksCss.mainBTN}>Done</button></td>
                        </tr>
                    )
                })}
                
            </table>
        </div>
            

        </div>
    </div>
  )
}
