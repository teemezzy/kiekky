import React, { useState } from "react";
import "./Sidebar.css";
import { sideList } from "./sideList";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Sidebar = ({children}) => {
  const navigate = useNavigate();
  
  return (
    <div className="side ">

      <div className="user_name mx-10 bg-white px-5 py-10 mb-8 w-[15rem]">
      <img src='' alt="" className="w-16" />
         <p>Valerie Walker</p>
      </div>

      <div className="side_list mx-10 bg-white w-[15rem] divide-y divide-opacity-50  divide-gray-300">
        {sideList.map((side) => (
          <div key={side.id} className="ml-5 pt-5 items-center text-sm text-gray">
            <NavLink to={side.path}
              className={`${
                window.location.pathname === side.path ? "active" : null
              }  flex items-center w-full h-[4rem] pl-5   hover:bg-[#E5E5E5] `}
              
            >
              <span className="mr-3 ">{side.icon}</span>
              {side.link}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
