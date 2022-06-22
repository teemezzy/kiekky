import React from "react";
import { Sidebar } from "../";
import { Outlet } from "react-router-dom";

const SideLayout = () => {
  return (
    <div>
      <div className="w-60 fixed">
        <Sidebar />
        <Outlet />
      </div>
      
      <div className="w-0">
        {/* <Sidebar /> */}
      </div>
      <div className="sidelayout"></div>
    </div>
  );
};

export default SideLayout;
