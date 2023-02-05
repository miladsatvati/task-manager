import React from 'react'
import admindashbordmainCSS from './admin-dashbord-main.module.css'
import { AiOutlineFlag } from "react-icons/ai";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
 function Admindashbordmain() {
  return (
    <div className={admindashbordmainCSS.container}>
        <div className={admindashbordmainCSS.containerChild}>
            <div className={admindashbordmainCSS.psItem}>
                <div className={admindashbordmainCSS.pic}></div>
                <div className={admindashbordmainCSS.name}><p>name</p></div>
                <div className={admindashbordmainCSS.mdl}>mdl</div>
                <div className={admindashbordmainCSS.cap}>cap</div>
                <div className={admindashbordmainCSS.pwr}>pwr</div>
                <div className={admindashbordmainCSS.version}>version</div>
                <div className={admindashbordmainCSS.number1}>1.2.3.4</div>
                <div className={admindashbordmainCSS.u}>U</div>
                <div className={admindashbordmainCSS.check}><input type="checkbox" /></div>
                <div className={admindashbordmainCSS.number2}>1.2.3.4</div>
                <div className={admindashbordmainCSS.footerContainer}>
                    <div className={admindashbordmainCSS.flag}><AiOutlineFlag />10</div>
                    <div className={admindashbordmainCSS.member}><AiOutlineUsergroupDelete />6</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admindashbordmain
