import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar-menu";
import ShowTasks from "../../components/showTasks/ShowTasks";
import Searchbar from "../../components/Searchbar/Searchbar";
import ShowTaskPageCss from "./ShowTaskPage.module.css";

export default function ShowTaskPage() {
  return (
    <div className={ShowTaskPageCss.container}>
      <Sidebar page="pslist" />
      <main className={ShowTaskPageCss.main}>
        <header>
          <Searchbar />
        </header>
        <ShowTasks />
      </main>
    </div>
  );
}
