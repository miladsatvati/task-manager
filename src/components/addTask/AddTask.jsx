import React from 'react'
import AddTaskCss from './AddTask.module.css'

export default function AddTask() {
  return (
    <div className={AddTaskCss.container}>
        <h1>Tasks</h1>
        <div className={AddTaskCss.main}>
            <div className={AddTaskCss.mainchild}>
                <form className={AddTaskCss.AddTaskForm}>
                    <label className={AddTaskCss.item}>
                        Task<input type="text" />
                    </label>
                    <label className={AddTaskCss.item}>
                        State<input type="text" />
                    </label>
                    <label className={AddTaskCss.item}>
                        Deadline<input type="date" />
                    </label>
                </form>
            </div>
        </div>
    </div>
  )
}
