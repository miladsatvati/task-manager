import React from "react";
import SidebarCSS from './Sidebar.module.css'
import {ReactComponent as Home} from "../../assets/pics/home.svg"
import { ReactComponent as Calender } from "../../assets/pics/calender.svg"
import {ReactComponent as Test} from "../../assets/pics/test.svg"
import {ReactComponent as Tasks} from "../../assets/pics/tasks.svg"
import {ReactComponent as Reports} from "../../assets/pics/reports.svg"
import { ReactComponent as Activity } from "../../assets/pics/activity.svg"
import { ReactComponent as Member } from "../../assets/pics/member.svg"

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/PslistPage",
        icon: <Home className={SidebarCSS.icon} />
    },
    {
        title: "Schedule",
        path: "/schedule",
        icon: <Calender className={SidebarCSS.icon}/>
    },
    {
        title: "Tests",
        path: "/tests",
        icon: <Test className={SidebarCSS.icon} />
    },
    {
        title: "Tasks",
        path: "/ShowTaskPage",
        icon: <Tasks className={SidebarCSS.icon} />
    },
    {
        title: "Reports",
        path: "/LinegraphPsPage",
        icon: <Reports className={SidebarCSS.icon} />
    },
    {
        title: "Activity",
        path: "/activity",
        icon: <Activity className={SidebarCSS.icon} />
    },    
    {
        title: "Members",
        path: "/members",
        icon: <Member className={SidebarCSS.icon} />
    }
]