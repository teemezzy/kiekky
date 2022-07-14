import { NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import React, { useState, useEffect } from "react";
import "../SideLayout/Sidebar.css";
import { sideList3 } from "../SideLayout/sideList3";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { FiLogOut } from "react-icons/fi";

const UserDrawer = () => {


    const navigate = useNavigate();
    const [post, setPost] = useState([]);
  
    const url = "https://fakerapi.it/api/v1/books?_quantity=1";
  
    const pathname = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    useEffect(() => {
      axios.get(url).then((response) => setPost(response.data.data));
    }, []);
    const onLogout = () => {
      // dispatchEvent(logout());
      // dispatch(reset());
      localStorage.removeItem("user");
      navigate("/");
    };
  return (
    <div className=' border-1  '>
      <div className="flex flex-col overflow-scroll justify-between pr-3 items-center sm:w-80 w-[17rem] h-[100vh] absolute left-0 right-32 m-auto z-10 py-10 px-8 mr-5 bg-white ">
       
      {post
        ? post.map((post, idx) => (
            <div key={idx} className="story-status ">
              <div className="user_name mx-10 bg-white flex items-center px-5 py-7 mb-8 w-[17rem] h-[7rem]">
                <div className="display-image">
                  <NavLink to='/personal_profile'>
                  <img
                    className="  w-[4rem] h-[4rem] p-[2.7px] cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
                    src={post.image}
                    alt="icon"
                  />
                  </NavLink>
                  
                </div>
<NavLink to='/personal_profile'>
                <div className="names ml-4 ">
                  <h5 className=" font-bold "> {post.author} </h5>
                  <h5 className="text-sm text-[#828282]  "> @{post.author} </h5>
                </div>
                </NavLink>
              </div>
            </div>
          ))
        : null}

      <div className="side_list mx-10 bg-white w-[17rem] h-[40rem] divide-y divide-opacity-50  divide-gray-300">
        {sideList3.map((side) => (
          <div
            key={side.id}
            className="ml-5 pt-5 items-center text-sm text-gray"
          >
            <NavLink
              to={side.path}
              className={`${
                window.location.pathname === side.path ? "active" : null
              }  flex items-center w-full h-[3.5rem] pl-5 text-[#828282]   hover:text-[#6a52fd] `}
              onClick={side.handleClick}
            >
              <span className="mr-3 ">{side.icon}</span>
              {side.link}
            </NavLink>
          </div>
        ))}

        <div className="ml-5 pt-5 items-center text-sm text-gray">
          <button
            type="button"
            onClick={onLogout}
            className={`${
              window.location.pathname === "/" ? "active" : null
            }  flex items-center w-full h-[4rem] pl-5   hover:bg-[#E5E5E5] `}
          >
            <span className="mr-3 ">
              <FiLogOut />
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>


      </div>
  
  );
};

export default UserDrawer; 





