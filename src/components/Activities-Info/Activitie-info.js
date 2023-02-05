import React from "react";
import ActiviesInfoCSS from "./Activities-info.module.css";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { ActivitiesInfoData } from "./Activities-info-data";

export default function Activitiesinfo() {
  return (
    <div className={ActiviesInfoCSS.container}>
      <h1>Activities</h1>
      <div className={ActiviesInfoCSS.items}>
        <div className={ActiviesInfoCSS.addBtn}>
          <AiOutlinePlusCircle />
          <Link to="#">Add Filters</Link>
        </div>
        <table>
          <tr>
            <th>
              No
              <AiFillCaretDown color="gray" />
            </th>
            <th>
              Activity
              <AiFillCaretDown color="gray" />
            </th>
            <th>
              User
              <AiFillCaretDown color="gray" />
            </th>
          </tr>
          {ActivitiesInfoData.map((item, index) => {
            return (
              <tr key={index} className={ActiviesInfoCSS.row}>
                <td className={ActiviesInfoCSS.info}>{item.number}</td>
                <td className={ActiviesInfoCSS.info}>{item.version}</td>
                <td className={ActiviesInfoCSS.info}>{item.created}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
