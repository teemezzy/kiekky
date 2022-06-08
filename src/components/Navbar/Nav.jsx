import React from "react";
import { navList } from "./navList";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex mx-10">
      {navList.map((nav) => (
        <div key={nav.id} className="border border-gray-700 px-8">
          <NavLink to={nav.path}>
            {nav.link}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Nav;
