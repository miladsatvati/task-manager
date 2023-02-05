import React from 'react'
import TestListCSS from "./Test-List.module.css"
import { Link } from 'react-router-dom'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { TestListData } from './Test-List-Data';

export default function Testlist() {
  return (
      <div className={TestListCSS.container}>
        <h1>Tests</h1>
        <div className={TestListCSS.items}>
          <div className={TestListCSS.addBtn}>
            <AiOutlinePlusCircle />
            <Link to="#">Add New Test</Link>
          </div>
        <table>
          <thead>
            <tr>
              <th>No<AiFillCaretDown color='gray'/></th>
              <th>Version<AiFillCaretDown color='gray'/></th>
              <th>Created<AiFillCaretDown color='gray'/></th>
              <th>State<AiFillCaretDown color='gray'/></th>
              <th>Ps<AiFillCaretDown color='gray'/></th>
              <th>RN<AiFillCaretDown color='gray'/></th>
              <th>RN2<AiFillCaretDown color='gray'/></th>
              <th>Type<AiFillCaretDown color='gray'/></th>
              <th>Files<AiFillCaretDown color='gray'/></th>
            </tr>
          </thead>
          <tbody>
            {TestListData.map((item, index) => {
              return (
                <tr className={TestListCSS.row}>
                  <th className={TestListCSS.info}>{item.number}</th>
                  <th className={TestListCSS.info}>{item.version}</th>
                  <th className={TestListCSS.info}>{item.created}</th>
                  <th className={TestListCSS.info}>{item.state}</th>
                  <th className={TestListCSS.info}>{item.ps}</th>
                  <th className={TestListCSS.info}>{item.rn}</th>
                  <th className={TestListCSS.info}>{item.rn2}</th>
                  <th className={TestListCSS.info}>{item.type}</th>
                  <th className={TestListCSS.info}>{item.files}</th>
                  <th className={TestListCSS.infoBtn}><button>Verify</button></th>
              </tr>
        )
      })}
      </tbody>
        </table>
        </div>
      </div>
  )
}