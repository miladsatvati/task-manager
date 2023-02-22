import React, { useEffect, useState } from "react";
import ActiviesInfoCSS from "./Activities-info.module.css";
import { axiosApi } from "../../defz";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import Loader from "../../components/Loader/Loader";

export default function Activitiesinfo() {
  const [activityData, setActivityData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    axiosApi(
      "api/user/get/activity",
      { number: 1 },
      localStorage.getItem("admin-token")
    ).then((res) => {
      setLoad(false);
      setActivityData(res.data.data);
    });
  }, []);

  return (
    <div className={ActiviesInfoCSS.container}>
      <div>{load && <Loader />}</div>
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
          {activityData.map((item, index) => {
            return (
              <tbody key={index}>
                <tr className={ActiviesInfoCSS.row}>
                  <td className={ActiviesInfoCSS.info}>{item.number}</td>
                  <td className={ActiviesInfoCSS.info}>{item.version}</td>
                  <td className={ActiviesInfoCSS.info}>{item.created}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
