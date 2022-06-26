import React from "react";
import { Sidebar } from "../components";
import { Outlet, Navigate } from "react-router-dom";

function Dashboard({ children }) {
  return (
    <div className="flex bg-[#E5E5E5] h-[100%]">
      <div className="sidebar_prt pt-8">
        <Sidebar />
      </div>
      <main> {children} </main>
      <Outlet />
    </div>
  );
}

export default Dashboard;
