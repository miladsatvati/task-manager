import React from 'react'
import PsListCSS from "../PsList/PsList.module.css"
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { AiTwotoneFlag } from "react-icons/ai";
import { PsListData } from './PsListData';


 function PsList() {
  return (
    <div className={PsListCSS.container}>
      <h1>Ps</h1>
      <div className={PsListCSS.main}>

        <div className={PsListCSS.header}>
          <ul className={PsListCSS.items}>
            <li>
            <Link to='#' className={PsListCSS.headerLink}>List Of Us</Link>
            </li>
            <li>
              <Link to='#' className={PsListCSS.headerLink}>List Of Items</Link>
            </li>
          </ul>
          <Link to='#' className={PsListCSS.additem}><AiFillPlusCircle className={PsListCSS.headerIcon} />Add New Item</Link>
        </div>
      <div className={PsListCSS.mainChild}>
        {PsListData.map((item, index) => {
          return (
            <div key={index} className={PsListCSS.ps}>
          <div className={PsListCSS.headerPS}>
            <div className={PsListCSS.PsProfile}></div>
            <p style={{"font-size": 20}}>ps</p>
          </div>
          <div className={PsListCSS.Psmain}>
            <div className={PsListCSS.row}>
              <p>Version</p>
              <p>{item.Version}</p>
            </div>
            <div className={PsListCSS.row}>
              <p>U</p>
              <input type="checkbox" />
              <p>{item.U}</p>
            </div>
            <div className={PsListCSS.footer}>
                 <p><AiTwotoneFlag />{item.flag}</p>
                 <p><AiOutlineUsergroupDelete />{item.members}</p>
            </div>
          </div>
        </div>
          )
        })}
        
      </div>
      </div>
      <div>

      </div>
      
    </div>
  )
}

export default PsList
