import React from "react";
import TestCSS from "./TestPage.module.css";
import Testlist from "../../components/Test-List/Test-list";
import Sidebar from "../../components/Sidebar/Sidebar-menu";


export default function TestsPage() {
  return (
    <div>
      <Sidebar page="pslist" />
      <main className={TestCSS.testContainer}>
        <Testlist />
      </main>
    </div>
  );
}
