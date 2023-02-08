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
                    <label>Version:
                        <select>
                            <option value="">No Version</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </label>
                    <label>Ps:
                        <select>
                            <option value="">No Version</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </label>
                    <button>submit</button>
                </form>
            </div>
            <div className={addStage.mainB}>

            </div>
        </div>
    </div>
  )
}

