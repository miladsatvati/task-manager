import React, { useState } from 'react'
import TestCreateCSS from "./Test-Create.module.css"
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function TestCreate() {
  // const [type, setType] = useState(null)
  // const [version, setVersion] = useState(null)
  // const [rn, setRn] = useState(null)
  // const [rn2, setrn2] = useState(null)
  // const [files, setFiles] = useState(null)

  return (
    <div className={TestCreateCSS.container}>
    <h1>Add Test</h1>
    <div className={TestCreateCSS.items}>
      <div className={TestCreateCSS.addBtn}>
        <AiOutlinePlusCircle />
        <Link to="#">Add New Test</Link>
      </div>
              <form>
                  <div>
            <label>Type</label>
            <select>
                <option>R</option>
                <option>H</option>
                  </select>
                  </div>
                  <div>
            <label>Version</label>
                      <input className={TestCreateCSS.inp} /> 
                  </div>
                  <div>
            <label>Upload RN1</label>
                      <input className={TestCreateCSS.inp} />  
                  </div>
                  <div>
            <label>Upload RN2</label>
                      <input className={TestCreateCSS.inp} />  
                  </div>
                  <div>
            <label>Upload Files</label>
                      <input className={TestCreateCSS.inp} />
                      </div>
            <input className={TestCreateCSS.submit} type="submit"/>      
      </form>
    </div>
  </div>
  )
}