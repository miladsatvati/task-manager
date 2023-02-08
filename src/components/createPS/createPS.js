import React from 'react'
import createCSS from './createPS.module.css'
import { useState } from 'react'


function CreatePS() {

    return (
        <div className={createCSS.Main}>

            <h1>Create a Ps</h1>

            <form className={createCSS.container}>

                <div className={createCSS.mainA}>
                    <label className={createCSS.item}>
                        name: <input />
                    </label>
                    <label className={createCSS.item}>
                        pwr: <input />
                    </label>
                    <label className={createCSS.item}>
                        in: <input />
                    </label>
                    <label className={createCSS.item}>
                        Bt tyor: <input />
                    </label>
                    <label className={createCSS.item}>
                        Bt md: <input />
                    </label>
                    <label className={createCSS.item}>
                        Srv: <input />
                    </label>
                    <label className={createCSS.item}> Test version:
                        <select className={createCSS.selectPS}>
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                        </select>
                    </label>
                    <label className={createCSS.item}>status:
                        <select className={createCSS.selectPS}>
                            <option>
                                Up
                            </option>
                            <option>
                                Down
                            </option>
                            <option>
                                Maintenance
                            </option>
                            <option>
                                Dvlp
                            </option>
                        </select>
                    </label>
                    <label className={createCSS.item}>
                        name: <input />
                    </label>
                </div>
                <div className={createCSS.mainB}>

                    <label className={createCSS.item}>
                        name: <input />
                    </label>
                    <label className={createCSS.item}>
                        pwr: <input />
                    </label>
                    <label className={createCSS.item}>
                        in: <input />
                    </label>
                    <label className={createCSS.item}> Str type:
                        <select className={createCSS.selectPS}>
                            <option>
                                adad:
                            </option>
                            <option>
                                arewr:
                            </option>
                        </select>
                    </label>
                    <label className={createCSS.item}> Rn type:
                        <select className={createCSS.selectPS}>
                            <option>
                                rsjrsjr:
                            </option>
                            <option>
                                waetwet:
                            </option>
                        </select>
                    </label>
                    <label className={createCSS.item}>
                        Rn Pwr: <input />
                    </label>
                    <label className={createCSS.item}>
                        Cs: <input />
                    </label>
                    <label className={createCSS.item}>
                        Cs admin: <input />
                    </label>
                    <label className={createCSS.calnderItem}>
                        Data mode: <input type='date' />
                    </label>
                </div>
                <div className={createCSS.mainC}>
                    <p>Note:</p>
                    <textarea className={createCSS.textArea} rows="5" cols="80" name="comment" form="usrform"></textarea>
                    <input type="button" value="Click me"></input>
                </div>

            </form>
        </div>
    )
}

export default CreatePS

