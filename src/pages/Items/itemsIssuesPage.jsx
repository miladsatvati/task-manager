import React from "react";
import ItemIssue from "../../components/Items/ItemIssue";
import ItemsCSS from "./Items.module.css";
import Sidebar from "../../components/Sidebar/Sidebar-menu";
import Searchbar from "../../components/Searchbar/Searchbar";

export default function ItemsIssuesPage() {
  return (
    <div className={ItemsCSS.container}>
      <Sidebar page="pslist" />
      <main className={ItemsCSS.main}>
        <Searchbar />
        <ItemIssue />
      </main>
    </div>
  );
}
