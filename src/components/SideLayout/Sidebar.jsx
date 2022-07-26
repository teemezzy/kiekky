import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { sideList } from "./sideList";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
// import { logout, reset } from "../../Redux/features/authSlice";
// import { useDispatch } from "react-redux";

const Sidebar = ({ children }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  const url = "https://fakerapi.it/api/v1/books?_quantity=1";
  const { id } = useParams();

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
    <div className=" relative">
      <div className=" ">
        {post
          ? post.map((post, idx) => (
              <div key={idx} className="story-status  ">
                <div className="user_name ml-10  bg-white flex items-center px-5 py-7 mb-8 w-[17rem] h-[7rem] ">
                  <div className="display-image">
                    <NavLink to="/personal_profile">
                      <img
                        className="  w-[4rem] h-[4rem] p-[2.7px] cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
                        src={post.image}
                        alt="icon"
                      />
                    </NavLink>
                  </div>
                  <NavLink to="/personal_profile">
                    <div className="names ml-4 ">
                      <h5 className=" font-bold "> {post.author} </h5>
                      <h5 className="text-sm text-[#828282]">@{post.author}</h5>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))
          : null}

        <div className="side_list ml-10 h-[540px] bg-white w-[17rem]  divide-y divide-opacity-50  divide-gray-300">
          {sideList.map((side) => (
            <div
              key={side.id}
              className="ml-5 pt-5 items-center text-sm text-gray"
            >
              <NavLink
                to={side.path}
                className={`${
                  window.location.pathname === side.path ? "active" : null
                }  flex items-center w-full h-[3.5rem] pl-5 text-[#828282] hover:text-[#6a52fd] `}
                onClick={side.handleClick}
              >
                <span className="mr-3 ">{side.icon}</span>
                {side.link}
              </NavLink>
            </div>
          ))}

          {/* <div className="ml-5 pt-5 items-center text-sm text-gray">
            <div
              type="button"
              onClick={onLogout}
              className={`${
                window.location.pathname === "/" ? "active" : null
              }  flex items-center w-full h-[4rem] pl-5  hover:bg-[#E5E5E5] `}
            >
              <a href="/">
                <span className="mr-3 ">
                  <FiLogOut />
                </span>
                Logout
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
