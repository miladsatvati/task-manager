import React from "react";
import ItemCSS from "./Item.module.css";
import Calendar from "../Calendar/Calendar";

const services = [
  { title: "S22" },
  { title: "S14" },
  { title: "S1" },
  { title: "S1" },
  { title: "S3" },
  { title: "S5" },
  { title: "S54" },
  { title: "S6" },
  { title: "S2" },
  { title: "S8" },
  { title: "S7" },
  { title: "S23" },
  { title: "S14" },
  { title: "S16" },
  { title: "S18" },
  { title: "S21" },
  { title: "S1" },
];

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
            <p>Oout</p>
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
          <div>
            <h1>Automatic report</h1>
            <button>Download API</button>
            <button>Deactivate</button>
          </div>
          d
        </aside>
        <section className={ItemCSS.main}></section>
      </div>
    </div>
  );
}
