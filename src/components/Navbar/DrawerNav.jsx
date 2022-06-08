import React from "react";
import { NavLink } from "react-router-dom";

const DrawerNav = () => {
  return (
    <div className=' '>
      <div className="flex flex-col justify-end absolute right-0 left-32 m-auto z-10 py-10 bg-white  ">
        <button className='py-5 '>
          <NavLink to='/'>Login</NavLink>
        </button>
        <button className='py-5'>
          <NavLink  to='/'>Register</NavLink>
        </button>
      </div>
    </div>
  );
};

export default DrawerNav;
