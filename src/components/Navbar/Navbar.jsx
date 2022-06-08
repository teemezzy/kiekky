import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between pt-10">
        <div className=" flex items-center">
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
      </nav>
    </div>
  );
};

export default Navbar;
