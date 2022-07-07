// import React from 'react';
import {BsBell, BsFilter} from  "react-icons/bs";



import React from "react";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import MidNav from "./UserMidNav";
import CustomRegister from "../../container/CustomButton";
// import CustomLogin from "../../container/CustomButton";

const UserNav = () => {
  return (
    <>
      <div className="fixed shadow-sm top-0 right-0 left-0 bg-white z-50 pb-5">
        <nav className="hidden xl:block xl:mx-32">
          <div className="flex justify-between pt-10 ">
            <div className=" flex items-center ">
              <NavLink to="/">
                <img src={Logo} alt="Kiekky_Logo" />
              </NavLink>
            </div>
            <div className="flex relative justify-between space-x-6 items-center">
           
      <input className="bg-gray-50 p-2 block focus:outline-none w-full pl-5 sm:text-sm focus:border-[gray]" type="text" name="" placeholder="search..." />
      <div className="absolute h-[100%] flex items-center flex-end pl-[9rem] ">
            <BsFilter className="h-5 w-5 pl-1 text-gray-500" />
            </div>

            <NavLink to='/notifications '  className={`${
                window.location.pathname === '/notifications' ? " active1 " : null
              }  `}>
            <p clasName='hover:bg-[#6a52fd] bell'><BsBell color="gray"/> </p>
            </NavLink>

            </div>
          </div>
        </nav>
      </div>
      <MidNav />
    </>
  );
};

export default UserNav;
