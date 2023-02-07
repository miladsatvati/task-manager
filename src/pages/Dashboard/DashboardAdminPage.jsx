import React from "react";
import DashboardAdminCSS from "./Dashboard-admin.module.css";
import Sidebar from "../../components/Sidebar/Sidebar-menu";
import Searchbar from "../../components/Searchbar/Searchbar";
import Item from "../../components/Items/Item";

export default function DashboardAdminPage() {
  return (
    <div className={DashboardAdminCSS.container}>
        <Sidebar />
      <main>
        <header>
          <Searchbar />
        </header>
        <Item />
      </main>
    </div>
  );
}
