import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "../components";
import { Routes, Route, useParams, Navigate } from "react-router-dom";

import Community from './Community'
import Dates from "./Dates";
import Messages from "./Messages";
import Wallet from "./Wallet";
import Settings from "./Settings";
import Home from "./Home";

function Dashboard() {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className=" flex bg-[#E5E5E5] h-[100vh]">
      <div className="  sidebar_prt pt-8">
        <Sidebar />
      </div>

      <div className="pages">
      
          {/* <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="community" element={<Community />} />
          <Route path="messages" element={<Messages />} />
          <Route path="dates" element={<Dates />} />
          <Route path="settings" element={<Settings />} />
          <Route path="wallet" element={<Wallet />} />
        */}
      </div>
    </div>
  );
}
export default Dashboard;
