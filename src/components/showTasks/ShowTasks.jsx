import React from 'react'
import tasksCss from './ShowTasks.module.css'
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

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
                <tr>
                    <td>8</td>
                    <td>blabla</td>
                    <td>ongoing</td>
                    <td>1/2/2023</td>
                    <td><button className={tasksCss.mainBTN}>Done</button></td>
                </tr>
            </table>
        </div>
            

        </div>
    </div>
  )
}
