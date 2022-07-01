// import React from 'react';
import {BsBell, BsFilter} from  "react-icons/bs";
// import { Logo } from '../../assets'



// function UserNav(props) {
//     return (
//         <div>
//                  <div className="nav-home shadow-sm mb-[20rem] fixed top-0 right-0 left-0 z-50 flex justify-between items-center p-7 bg-white">

// <img src={Logo} alt="" />

// <div className="search flex  items-center space-x-10">
// <div className="relative flex hidden items-center lg:block  ">
//   <div className="absolute h-[100%] flex items-center justify-center ml-3 ">
//     <BsSearch className="h-5 w-5 pl-1 text-gray-500" />
//   </div>
//   <input className="bg-gray-50 p-2 block focus:outline-none w-full pl-10 sm:text-sm focus:border-[gray]" type="text" name="" placeholder="Search" />
// </div>

// <p><BsBell color="gray"/> </p>



// </div>

// </div>
//         </div>
//     );
// }

// export default UserNav;


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
           
      <input className="bg-gray-50 p-2 block focus:outline-none w-full pl-5 sm:text-sm focus:border-[gray]" type="text" name="" placeholder="Search" />
      <div className="absolute h-[100%] flex items-center flex-end pl-[9rem] ">
            <BsFilter className="h-5 w-5 pl-1 text-gray-500" />
            </div>
         <p><BsBell color="gray"/> </p>

            </div>
          </div>
        </nav>
      </div>
      <MidNav />
    </>
  );
};

export default UserNav;
