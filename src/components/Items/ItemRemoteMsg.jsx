import React from "react";
import ItemCSS from "./Item.module.css";
import Calendar from "../Calendar/Calendar";
import { services } from "./Item-Data";
import { AiFillCaretDown } from "react-icons/ai";
// import { Link } from "react-router-dom";

export default function ItemRemoteMsg() {
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
        <div className={ItemCSS.container}>
          {/* <div>{ load && <Loader /> }</div> */}
          <div className={ItemCSS.items}>
            <table>
              <tr>
                <th>
                  No
                  <AiFillCaretDown color="gray" />
                </th>
                <th>
                  Date/Time
                  <AiFillCaretDown color="gray" />
                </th>
                <th>
                  Message
                  <AiFillCaretDown color="gray" />
                </th>
              </tr>
              <tbody>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
                <tr className={ItemCSS.Rrow}>
                  <td className={ItemCSS.Rinfo}>x</td>
                  <td className={ItemCSS.Rinfo}>y</td>
                  <td className={ItemCSS.Rinfo}>z</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
