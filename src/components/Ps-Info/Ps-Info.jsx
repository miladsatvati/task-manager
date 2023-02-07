import React from 'react'
import PsInfoCSS from "./Ps-Info.module.css"

export default function PsInfo() {
  return (
    <div className={PsInfoCSS.container}>
          <div className={PsInfoCSS.titles}>
              <p>Created Date</p>
              <p>Cs</p>
              <p>Cs Email</p>
              <p>Up(hours)</p>
              <p>Maintenance</p>
              <p>Down</p>
              <p>Capacity</p>
              <p>Loc</p>
              <p>TS</p>
              <p>Model</p>
              <p>In</p>
              <p>Bt</p>
          </div>
          <div className={PsInfoCSS.infos}>
                      <p>16/5/2022</p>          
                      <p>Lab1</p>          
                      <input value="blabadwerwerlalb@gmail.com" readonly="readonly" />         
                      <p>120</p>          
                      <p>1</p>          
                      <p>10</p>          
                      <p>10</p>          
                      <p>a2</p>          
                      <p>UTL bla</p>          
                      <p>Tls cra</p>          
                      <p>in</p>          
                      <p>bt</p>          
          </div>
    </div>
  )
}
