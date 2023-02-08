import React, { useState } from "react";
// import SidebarChart from "../Stats/Stats";
import PsInfo from "../Ps-Info/Ps-Info";
import SidebarCSS from "./Sidebar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";


export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className={SidebarCSS.navBar}>
        <Link to='#' className={SidebarCSS.menuBars}>
          <AiOutlineMenu  color="black" onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? `${SidebarCSS.navMenu} ${SidebarCSS.navMenuActive}` : SidebarCSS.navMenu}>
          <div className={SidebarCSS.navBarToggle}>
            <Link to='#' className={SidebarCSS.menuBars}>
              <AiOutlineClose size='30px' color="black" onClick={showSidebar}/>
            </Link>
          </div>
        <ul className={SidebarCSS.navMenu_items} onClick={showSidebar}>
          <li className={SidebarCSS.navBarToggle}>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={SidebarCSS.navText}>
                <Link to={item.path} className={SidebarCSS.Link}>
                  {item.icon}
                  <span className={SidebarCSS.title}>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
          <PsInfo />
      </nav>
    </>
  );
}