import React from "react";
import ItemCSS from "./Item.module.css";
import Calendar from "../Calendar/Calendar";
import { AiOutlineOrderedList } from "react-icons/ai";
// import { BsFillPersonFill } from "react-icons/bs";
import { services } from "./Item-Data";
import { Rissues } from "./Item-Data";

export default function Item() {
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
          <AiOutlineOrderedList />
          {Rissues.map((item, index) => {
            return (
              <div key={index} className={ItemCSS.issuesBox}>
                <p>{`${Rissues.length - index}`}</p>
                <p>{item.info}</p>
                <p>{item.status}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
