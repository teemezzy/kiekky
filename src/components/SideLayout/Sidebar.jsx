import React, { useState } from "react";
import "./Sidebar.css";
import { sideList } from "./sideList";
import { NavLink } from "react-router-dom";
// import { logo } from "../../assets";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(1);
  const sideClick = (id) => {
    setIsActive(id);
  };


  const activeLink = "link flex items-center p-4";
  const normalLink = "flex items-center p-4";
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar">
        <div className="p-10">
          <img src='' alt="" className="w-16" />
          <p>Valerie Walker</p>
        </div>
        {sideList.map((side) => (
          <div key={side.id} className=" w-40 mx-16 text-sm">
            <NavLink
              to={side.path}
              onClick={() => sideClick(side.id)}
             
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="mr-3">{side.icon}</span>
              {side.link}
            </NavLink>
          </div>
        ))}
        <button className="border-gray-900 flex items-center p-3 mt-32 ml-16">
          <span className="mr-3">
            <FiLogOut />
          </span>Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
