import React from "react";
import { sideList2 } from "../SideLayout/sideList2";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";


function MobileNav(props) {
  return (
    <div>
      <div className="mobile-nav  bg-[#FFFFFF] h-[4.75rem] block lg:hidden shadow-sm fixed bottom-0 right-0 left-0 z-50 ">
        <div className="side_list2 flex space-x-10 justify-center py-[1rem] items-center">
          {sideList2.map((side) => (
            <div key={side.id} className=" text-[#828282] ">
              <NavLink
                to={side.path}
                className={`${
                  window.location.pathname === side.path ? "active" : null
                }   hover:text-[#6a52fd]  `}
                onClick={side.handleClick}
              >
                <span className=" flex justify-center">{side.icon}</span>
                {side.link}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
