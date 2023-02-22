import React, { useEffect, useState } from 'react'
import tasksCss from './ShowTasks.module.css'
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { axiosApi } from '../../defz';
import { toast } from 'react-hot-toast';
import { Pagination } from '@mui/material'

export default function ShowTasks() {
    const [showTaskData, setShowTaskData] = useState([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(0)
    const handleChange = (e, p) => {
        setPage(p)
    }

    useEffect(() => {
        axiosApi(
            'api/user/get/task',
            { number: 1 },
            localStorage.getItem('admin-token')
        )
            
            .then(res => {
                console.log(res)
                if (res.data.status_code == 200) {
                    setMaxPage(res.data.max_page)
                    setShowTaskData(res.data.data)
                }
                else {
                    toast.error('Error')
                }
            })
    }, [])

    return (
        <div className={tasksCss.container}>
            <h1>Tasks</h1>
            <div className={tasksCss.main}>
                <div className={tasksCss.addTask}>
                    <AiFillPlusCircle className={tasksCss.plusicon} />
                    <Link to="/AddTaskPage">Add Task</Link>
                </div>
                <div className={tasksCss.tableDV}>
                    <table className={tasksCss.tasks}>
                        <tbody>
                            <tr className={tasksCss.Info}>
                                <th>no <AiFillCaretDown /></th>
                                <th>Tasks</th>
                                <th>State</th>
                                <th>Deadline</th>
                                <th>Complete</th>
                            </tr>
                        </tbody>
                        {showTaskData.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr >
                                        <td>{showTaskData.length - index}</td>
                                        <td>{item.task}</td>
                                        <td>{item.State}</td>
                                        <td>{item.deadline}</td>
                                        <td><button className={
                                            item.value === 'Resolve' ? `${tasksCss.mainBTN} ${tasksCss.mainResolveBTN}`
                                                : tasksCss.mainBTN
                                        }>Done</button></td>
                                    </tr>
                                </tbody>
                            )
                        })}

                    </table>
                </div>
                <div className={tasksCss.PaginationShowTask}>
                    <Pagination count={maxPage} color="primary" onChange={handleChange}> </Pagination>
                </div>
            </div>
        </div>
    )
}
