import React from 'react'
import addStage from './Addstage.module.css'

export const AddStage = (props) => {
  return (
    <div className={addStage.container}>
        <h1>Sch</h1>
        <div className={addStage.main}>
            <div className={addStage.mainA}>
                <form>
                    <label>
                        Date: <input type="date" />
                    </label>
                    <label>
                        Version: <input type="text" />
                    </label>
                    <label>
                        Ps: <input type="text" />
                    </label>
                </form>
            </div>
            <div className={addStage.mainB}>

            </div>
        </div>
    </div>
  )
}

