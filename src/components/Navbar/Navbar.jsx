import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import MidNav from "./MidNav";

const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 left-0 '>
      <nav className="hidden xl:block xl:mx-32">
        <div className="flex justify-between pt-10 ">
        <div className=" flex items-center ">
          <NavLink to="/">
            <img src={Logo} alt="Kiekky_Logo" />
          </NavLink>
        </div>
        <div className="flex justify-between items-center">
          <button type="button" className="mx-8 px-10 text-lg">
            <NavLink to="/login">Login</NavLink>
          </button>
          <button type="button" className="w-44 h-14 px-10 button text-base">
            <NavLink to="/register">Register</NavLink>
          </button>
        </div>
        </div>
      </nav>
      <MidNav />
    </div>
  );
};

export default Navbar;
