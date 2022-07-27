import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";

function LoginNav() {
  return (
    <div className="bg-white lg:hidden block">
      <div className=" fixed top-0 right-0 left-0 py-[3rem]  bg-white pb-5">
        <div className=" w-[340px] m-auto">
          <NavLink to="/">
            <img src={Logo} alt="Kiekky_Logo" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginNav;
