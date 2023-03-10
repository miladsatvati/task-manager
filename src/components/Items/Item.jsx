import React, { useEffect, useState } from 'react'
import ItemCSS from "./Item.module.css";
import Calendar from "../Calendar/Calendar";
import { axiosApi } from '../../defz';
import toast from "react-hot-toast";
import { AiOutlineOrderedList } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs"
import { AiFillFlag } from "react-icons/ai"
import { AiFillInfoCircle } from "react-icons/ai"
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { services } from "./Item-Data";
import { tasks } from "./Item-Data";
import { comments } from "./Item-Data";
import { issues } from "./Item-Data";
import { ActivitiesInfoData } from "../Activities-Info/Activities-info-data";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams()

  const [psData, setPsData] = useState()

  const getPsInfo = () => {
    axiosApi(
      "api/user/get/ps_one",
      { psid: id },
      localStorage.getItem('admin-token')
    )
    .then(res => setPsData(res.data.data[0]))
    .catch(res => toast.error('Fail to connect to server'))
  }

  const getPsChat = () => {
    axiosApi(
      "api/user/get/ps_one",
      { psid: id },
      localStorage.getItem('admin-token')
    )
    .then(res => setPsData(res.data.data[0]))
    .catch(res => toast.error('Fail to connect to server'))
  }

  useEffect( () => {
    getPsInfo()
  }, [])
  

  const navTo = useNavigate()
  return (
    <div className={ItemCSS.container}>
      <h1 className={ItemCSS.title}>Items</h1>
      <div className={ItemCSS.items}>
        <aside>
          <div className={ItemCSS.ver}>
            <p>Version:</p>
            <p>{psData?.test_version}</p>
          </div>
          <div className={ItemCSS.U}>
            <p>U:</p>
            <input type="checkbox" />
            <p>1.2.3.4</p>
            <button>Complete</button>
          </div>
          <div className={ItemCSS.cal}>
            <p>Oout:</p>
            <p>{psData?.date_made}</p>
          </div>
          <div className={ItemCSS.noSer}>
            <p>Number of services:</p>
            <p>12</p>
          </div>
          <div className={ItemCSS.ser}>
            {services.map((item, index) => {
              return (
                <button key={index} className={ItemCSS.serBtn}>
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className={ItemCSS.autoR}>
            <h1>Automatic report</h1>
            <button>Download API</button>
            <button>Deactivate</button>
          </div>
          <div className={ItemCSS.manR}>
            <h1>Manual Report</h1>
            <button>Down</button>
            <button>Maintenance</button>
            <button>Up</button>
          </div>
        </aside>
        <section className={ItemCSS.main}>
          <div className={ItemCSS.Box} >
            <AiOutlineOrderedList
              size="28"
              style={{ position: "absolute", left: "-3.5%", top: "0%" }}
            />
            {tasks.map((item, index) => {
              return (
                <div key={index} className={ItemCSS.tasksItems}>
                  <p>{`${tasks.length - index}`}</p>
                  <p>{item.info}</p>
                  <button
                    className={
                      item.status === "Done"
                        ? `${ItemCSS.statusBtn} ${ItemCSS.statusBtnDone}`
                        : ItemCSS.statusBtn
                    }>
                    {item.status}
                  </button>
                </div>
              );
            })}
            <div className={ItemCSS.link}>
              <Link to={`/item-tasks/${id}`}>See All</Link>
            </div>
          </div>
          <div className={ItemCSS.Box}>
            <BsFillPeopleFill
              size="28"
              style={{ position: "absolute", left: "-3.5%", top: "25%" }}
            />
            {comments.map((item, index) => {
              return (
                <div key={index} className={ItemCSS.commentsItems}>
                  <BsFillPersonFill size="20" />
                  <p>{item.user}:</p>
                  <p>{item.comment}:</p>
                </div>
              );
            })}
            <div className={ItemCSS.link}>
              <input type="text" placeholder="Type your comment" onClick={() => navTo("/item-chats")} />
              <Link to="/item-chats">See All</Link>
              </div>
          </div>
          <div className={ItemCSS.Box}>
            <AiFillFlag
              size="28"
              style={{ position: "absolute", left: "-3.5%", top: "51%" }}
            />
            {issues.map((item, index) => {
              return (
                <div key={index} className={ItemCSS.issuesItems}>
                  <p>{`${issues.length - index}`}</p>
                  <p>{item.info}</p>
                  <button
                    className={
                      item.status === "Resolve"
                        ? `${ItemCSS.issueStatusBtn} ${ItemCSS.issueStatusBtnResolve}`
                        : ItemCSS.issueStatusBtn
                    }>
                    {item.status}
                  </button>
                  <select>
                    <option>
                      {item.version}
                    </option>
                  </select>
                </div>
              );
            })}
            <div className={ItemCSS.link}>
              <Link  to={`/item-issues/${id}`}>See All</Link>
              </div>
          </div>
          <div className={ItemCSS.Box}>
            <AiFillInfoCircle
              size="28"
              style={{ position: "absolute", left: "-3.5%", top: "76%" }}
            />
            <table>
              <thead>
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
                </thead>
          {ActivitiesInfoData.map((item, index) => {
            return (
              <tbody key={index}>
              <tr className={ItemCSS.row}>
                <td className={ItemCSS.info}>{item.number}</td>
                <td className={ItemCSS.info}>{item.version}</td>
                <td className={ItemCSS.info}>{item.created}</td>
              </tr>
              </tbody>
            );
          })}
        </table>
            <div className={ItemCSS.link}>
              <Link to="/item-remotemsg">See All</Link>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
