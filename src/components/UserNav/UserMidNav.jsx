import React, { useState } from "react";
import { navList } from "../Navbar/navList";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import UserDrawer from "./UserDrawer";
import {BsBell, BsFilter} from  "react-icons/bs";


const UserMidNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="set-position">
      <div className=" xl:hidden pt-10 flex justify-between items-center px-5 bg-white pb-4 ">
           
           <div className="home-ham flex items-center space-x-5">

           <div className="text-[#828282]" >{toggle ? <GrClose onClick={handleClick} /> : <GiHamburgerMenu onClick={handleClick}/>}</div>
         
         {navList.map((nav) => (
         <div key={nav.id}>
             <NavLink className="" to={nav.path}>
             {nav.link}
             </NavLink>
         </div>
         ))}

           </div>
     
        
       <NavLink to='/notifications' >  <p><BsBell color="gray"/> </p> </NavLink>
            
      </div>


      <div>
        {toggle && (
          <div className="flex flex-col justify-end">
            <UserDrawer />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMidNav;
