import React from "react";
import ItemCSS from "./Item.module.css";
import Calendar from "../Calendar/Calendar";
import { services } from "./Item-Data";
import { AiOutlineOrderedList } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { tasks } from "./Item-Data";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function ItemTask() {
  return (
    <div className={ItemCSS.container}>
      <h1 className={ItemCSS.title}>Items</h1>
      <div className={ItemCSS.items}>
        <aside>
          <div className={ItemCSS.ver}>
            <p>Version:</p>
            <p>1.2.3.4</p>
          </div>
          <div className={ItemCSS.U}>
            <p>U:</p>
            <input type="checkbox" />
            <p>1.2.3.4</p>
            <button>Complete</button>
          </div>
          <div className={ItemCSS.cal}>
            <p>Oout:</p>
            <Calendar />
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
          <div className={ItemCSS.TasksContainer}>
            <AiOutlineOrderedList
              size="30"
              style={{ position: "absolute", left: "-3.5%", top: "2%" }}
            />
            <div className={ItemCSS.addBtn}>
              <AiOutlinePlusCircle style={{ verticalAlign: "middle" }} />
              <Link to="#">Add New Task</Link>
            </div>
            <div className={ItemCSS.Tasks}>
              {tasks.map((item, index) => {
                return (
                  <div key={index} className={ItemCSS.tasksItemsM}>
                    <p>{`${tasks.length - index}`}</p>
                    <p>{item.info}</p>
                    <button
                      className={
                        item.status === "Pending"
                          ? `${ItemCSS.taskstatusBtnM} ${ItemCSS.taskstatusBtnResolveM}`
                          : ItemCSS.taskstatusBtnM
                      }>
                      {item.status}
                        </button>
                        <p>ver:</p>
                    <select>
                      <option>{item.version}</option>
                    </select>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
