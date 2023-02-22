import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./styles.css";
import LoginPage from "./pages/login/LoginPage";
import EnterEmailPage from "./pages/login/EnterEmailPage";
import ChangePassPage from "./pages/login/ChangePassPage";
import ItemsPage from "./pages/Items/ItemsPage";
import ItemsTasksPage from "./pages/Items/itemsTasksPage";
import ItemsIssuesPage from "./pages/Items/itemsIssuesPage";
import AddItemsIssuePage from "./pages/Items-Add/Add-Items-IssuePage";
import ItemsChatsPage from "./pages/Items/itemsChatsPage";
import ItemsRemoteMsgPage from "./pages/Items/itemsRemoteMsgPage";
import TestsPage from "./pages/Tests/TestPage";
import CreateTestPage from "./pages/Tests/CreateTestPage";
import ActivitiesPage from "./pages/Activities/ActivitiesPage";
import MembersPage from "./pages/Members/MembersPage";
import MembersAddPage from "./pages/Members/MembersAddPage";

import PslistPage from "./pages/ps-list/PslistPage.jsx";
import CreatePsPage from "./pages/create-ps/CreatePsPage";

import ShowTaskPage from "./pages/showTask/ShowTaskPage";
import AddTaskPage from "./pages/Add-Tasks/AddTaskPage";

import LinegraphPsPage from "./pages/reports-LineGraph-Ps/LinegraphPsPage";
import ReportCountriesPage from "./pages/report-countries/reportCountriesPage";
import ReportsStatusPage from "./pages/repors-status/ReportsStatusPage";


export default function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/send-email" element={<EnterEmailPage />} />
        <Route path="/change-pass" element={<ChangePassPage />} />
        <Route path="/items/:id" element={<ItemsPage />} />
        <Route path="/item-tasks/:id" element={<ItemsTasksPage />} />
        <Route path="/item-issues/:id" element={<ItemsIssuesPage />} />
        <Route path="/add-item-issue/:id" element={<AddItemsIssuePage />} />
        <Route path="/item-chats/:id" element={<ItemsChatsPage />} />
        <Route path="/item-remotemsg/:id" element={<ItemsRemoteMsgPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/add-test" element={<CreateTestPage />} />
        <Route path="/activity" element={<ActivitiesPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/add-members" element={<MembersAddPage />} />
        <Route path="/PslistPage" element={<PslistPage />} />
        <Route path="createPsPage" element={<CreatePsPage />} />
        <Route path="/ShowTaskPage" element={<ShowTaskPage />} />
        <Route path="/AddTaskPage" element={<AddTaskPage />} />
        <Route path="/LinegraphPsPage" element={<LinegraphPsPage />} />
        <Route path="/ReportCountriesPage" element={<ReportCountriesPage />} />
        <Route path="/ReportsStatusPage" element={<ReportsStatusPage />} />
      </Routes>
    </div>
  );
}
