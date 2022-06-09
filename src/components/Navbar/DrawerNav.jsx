import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const DrawerNav = () => {
  return (
    <div className=' border-1 '>
      <div className="flex flex-col justify-between items-center sm:w-80 w-72 h-72 absolute right-0 left-32 m-auto z-10 py-10 px-8 mr-5 bg-white ">
        <button className='py-5 px-28 border-2'>
          <NavLink to='/'>Login</NavLink>
        </button>
        <button className='py-5 px-24 sm-btn'>
          <NavLink  to='/'>Register</NavLink>
        </button>
      </div>
    </div>
  );
};

export default DrawerNav;
