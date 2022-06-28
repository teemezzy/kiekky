import React from "react";
import { Sidebar } from "../components";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  Home,
  Profile,
  Community,
  Dates,
  Messages,
  Wallet,
  Settings,
  Logout,
} from ".";

function Dashboard({ children }) {
  return (
    <div className="flex bg-[#E5E5E5] h-[100%] static">
      <div className="sidebar_prt pt-8">
        <Sidebar />
        {/* <Outlet /> */}
      </div>
      <main> {children} </main>

     
    </div>
  );
}

export default Dashboard;

{/* <Routes>
  <Route element={<Navigate to='/home'  />} />
  <Route path="home" element={<Home />} />
  <Route path="community" element={<Community />} />
  <Route path="messages" element={<Messages />} />
  <Route path="dates" element={<Dates />} />
  <Route path="settings" element={<Settings />} />
  <Route path="wallet" element={<Wallet />} />
  <Route path="logout" element={<Logout />} />
  <Route path="user/:userid" element={<Profile />} />
</Routes> */}