import React, { useState } from "react";
import ItemCSS from "./Item.module.css";
import Calendar from "../Calendar/Calendar";
import { axiosApi } from "../../defz";
import { services } from "./Item-Data";
import { BsFillPersonFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { comments } from "./Item-Data";
import { Link } from "react-router-dom";

export default function ItemChats() {
  const [msg, setMsg] = useState([])


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
          <div>
            <BsFillPersonFill
              size="30"
              style={{ position: "absolute", left: "-3.5%", top: "3%" }}
            />
            <div className={ItemCSS.addBtn}>
              <AiOutlinePlusCircle style={{ verticalAlign: "middle" }} />
              <Link to="#">Add New Issue</Link>
            </div>
            <div className={ItemCSS.Comments}>
            {comments.map((item, index) => {
              return (
                <div key={index} className={ItemCSS.commentsItems}>
                  <BsFillPersonFill size="20" />
                  <p>{item.user}:</p>
                  <p>{item.comment}</p>
                </div>
              );
            })}
              <footer className={ItemCSS.inpContainer}>
                <input type="text" placeholder="Type your comment ..." />
                <button>
                  <RiSendPlaneFill size="20" />
                </button>
              </footer> 
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
