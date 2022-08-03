import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import React, { useState, useEffect } from "react";
import "../SideLayout/Sidebar.css";
import { sideList3 } from "../SideLayout/sideList3";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { logout, reset } from "../../Redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../container/Spinner";

const UserDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const { user, isSuccess, isLoading, message} = useSelector((state) => state.auth);

  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    axios.get(url).then((response) => setPost(response.data.data));
  }, []);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload(true);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    // dispatch(reset());
  }, [user, isSuccess, message, dispatch, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className=" border-1  ">
      <div className="  pr-3  sm:w-80  h-[100vh] absolute left-0 w-[18rem] z-10 py-10  bg-white ">
        <input
          className="bg-[#F6F4FF] p-2 block rounded-md focus:outline-none w-[250px] m-auto pl-5 sm:text-sm focus:border-[gray]"
          type="text"
          name=""
          placeholder="search..."
        />

        {post
          ? post.map((post, idx) => (
              <div key={idx} className="story-status ">
                <div className="user_name   bg-white flex items-center px-8 pt-7  h-[7rem]">
                  <div className="display-image">
                    <NavLink to="/personal_profile">
                      <img
                        className="  min-w-[4rem] h-[4rem] p-[2.7px] cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
                        src={post.image}
                        alt="icon"
                      />
                    </NavLink>
                  </div>
                  <NavLink to="/personal_profile">
                    <div className="names ml-4 ">
                      <h5 className=" font-bold "> {post.author} </h5>
                      <h5 className="text-sm text-[#828282]  ">
                        {" "}
                        @{post.author}{" "}
                      </h5>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))
          : null}

        <div className="side_list bg-white h-[40rem] divide-y divide-opacity-50  divide-gray-300">
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
