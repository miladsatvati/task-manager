import React, { useEffect, useState } from 'react'
import AddTaskCss from './AddTask.module.css'
import { axiosApi } from '../../defz'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


export default function AddTask() {
    const navigate = useNavigate()

    const [task, setTask] = useState('')
    const [state, setState] = useState('')
    const [deadline, setdeadline] = useState('')
    const [psid, setPsid] = useState('')
    const [get, setGet] = useState([])

    useEffect(() => {
        axiosApi(
            'api/user/get/ps',
            { number: "all"},
            localStorage.getItem('admin-token')
        )
            .then(res => setGet(res.data.data))
    }, [])

    const AddTaskData = {
        psid: psid,
        task: task,
        deadline: deadline,
        state: state
    }

    const submit = (e) => {
        if(deadline === 0) {
            toast.error('You must fill all the fields')
            return 0
        }
        if (psid.length === 0) {
            toast.error('You must fill all the fields')
            return 0
        }
        if (task.length === 0) {
            toast.error('You must fill all the fields')
            return 0
        }
        if (state.length === 0) {
            toast.error('You must fill all the fields')
            return 0
        }
        e.preventDefault();
        axiosApi(
            'api/user/add/tasks',
            AddTaskData,
            localStorage.getItem("admin-token")
        )
            .then((res) => {
                if (res.data.status_code === 200) {
                    toast.success(res.data.description)
                    setTimeout(() => {
                        navigate('/ShowTaskPage')
                    }, 2000);
                } else {
                    toast.error(res.data.description)
                }
            })
    }
    return (
        <div className={AddTaskCss.container}>
            <h1>Tasks</h1>
            <div className={AddTaskCss.main}>
                <h2>Add Tasks</h2>
                <div className={AddTaskCss.mainchild}>
                    <form className={AddTaskCss.AddTaskForm}>
                        <label className={AddTaskCss.item}>
                            Ps:
                            <select
                                className={AddTaskCss.item}
                                onChange={(e) =>
                                    setPsid(e.target.value)}
                                defaultValue='choose'
                            >
                                <option hidden disabled>choose</option>
                                {
                                    get.map((item, index) => {
                                        return (
                                            <option key={index} value={item._id} >{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                        <label className={AddTaskCss.item}>
                            Task:<input type="text" onChange={(e) => setTask(e.target.value)} />
                        </label>
                        <label className={AddTaskCss.item}>
                            State:<input type="text" onChange={(e) => setState(e.target.value)} />
                        </label>
                        <label className={AddTaskCss.item}>
                            Deadline:<input type="date" onChange={(e) => setdeadline(e.target.value)} />
                        </label>
                        <button onClick={submit} >submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
