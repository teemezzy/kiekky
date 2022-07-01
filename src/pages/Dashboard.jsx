import React, { useEffect } from "react";
import { Sidebar } from "../components";
import { Outlet, Navigate, useLocation } from "react-router-dom";
// import { Logo } from "../assets";
// import { BsBell } from "react-icons/bs";

function Dashboard({ children }) {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className=" bg-[#E5E5E5] h-[100%]">
      <div className="flex">
        <div className="fixed hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className="pages"></div>
      </div>
    </div>
  );
}
export default Dashboard;
