import React, { useState } from "react";
import "./Sidebar.css";
import { sideList } from "./sideList";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [isActive, setIsActive] = useState(1);
  const sideClick = (id) => {
    setIsActive(id);
  };


  const activeLink = "link flex items-center p-4";
  const normalLink = "flex items-center p-4";
  const navigate = useNavigate();
  return (
    // <div className="sidebar">
    //   <div className=" mx-16  border-2  bg-white w-[15rem]">
    //     <div className="p-10">
    //       <img src='' alt="" className="w-16" />
    //       <p>Valerie Walker</p>
    //     </div>
    //     <div className="list divide-y divide-opacity-50  divide-gray-300">
    //     {sideList.map((side) => (
    //       <div key={side.id} className=" mx-5  items-center text-sm text-gray">
    //         <NavLink      
    //           to={side.path}
    //           // onClick={() => sideClick(side.id)}

    //         //  onClick={()=> navigate('{`${side.path}')}

    //           className={`${({ isActive }) => (isActive ? activeLink : normalLink)}  flex items-center w-full h-[4rem] hover:border-l-4 hover:border-[#6a52fd] hover:bg-[#6a52fd] hover:opacity-7 `}
    //         >
    //           <span className="mr-3 ">{side.icon}</span>
    //           {side.link}
    //         </NavLink>
    //       </div>
    //     ))}
        
       
    //     </div>
    //   </div>
    // </div>

    <div className="side ">

      <div className="user_name mx-10 bg-white px-5 py-10 my-8 w-[15rem]">
      <img src='' alt="" className="w-16" />
         <p>Valerie Walker</p>
      </div>

      <div className="side_list mx-10 bg-white w-[15rem] divide-y divide-opacity-50  divide-gray-300">
        
      {sideList.map((side) => (
          <div key={side.id} className=" mx-5  items-center text-sm text-gray">
            <p  
              className={`${(window.location.pathname === side.path? 'active' : "")}  flex items-center w-full h-[4rem]  hover:border-[#6a52fd] hover:bg-[#6a52fd] hover:opacity-7 `}
            
            onClick={() => window.location.pathname= (side.path)}  >   
              
               {/* onClick={() => sideClick(side.id)} */}

            {/* onClick={()=> navigate('{`${side.path}')} */}

            
              <span className="mr-3 ">{side.icon}</span>{side.link}  </p>
            </div>))}
      </div>

    </div>
    
  );
};


export default Sidebar;
