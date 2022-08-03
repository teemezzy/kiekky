import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { sideList } from "./sideList";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { logout, reset } from "../../Redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import SidebarSkeleton from './SidebarSkeleton'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Spinner from "../../container/Spinner";

const Sidebar = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoadings, setIsLoadings] = useState(true)
  const { user, isSuccess, isLoading, message} = useSelector((state) => state.auth);
  // const { otp } = useSelector((state) => state.otptoken);

  const url = "https://fakerapi.it/api/v1/books?_quantity=1";
  // const { id } = useParams();
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    axios.get(url).then((response) => { setPost(response.data.data); setIsLoadings(false) });
  }, []);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload(true);
    // localStorage.removeItem("user", "otptoken");
    // localStorage.removeItem();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, message, dispatch, navigate]);

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <div className=" relative">
      {isLoadings && <SidebarSkeleton cards={1} />}

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
                    <h5 className=" font-bold text-[#2E2357] "> {post.author} </h5>
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
                className={`${window.location.pathname === side.path ? "active" : null
                  }  flex items-center w-full h-[3.5rem] pl-5 text-[#828282] hover:text-[#6a52fd] `}
                onClick={side.handleClick}
              >
                <span className="mr-3 ">{side.icon}</span>
                {side.link || <Skeleton />}
              </NavLink>
            </div>
          ))}

          {user ? (
            <div className="ml-5 pt-5 items-center text-sm text-gray" onClick={()=> window.location.reload(true)}>
              <button
                type="button"
                onClick={onLogout}
                className={`${window.location.pathname === "/" ? "active" : null
                  }  flex items-center w-full h-[4rem] pl-5  hover:bg-[#E5E5E5] `}
              >
                <span className="mr-3 ">
                  <FiLogOut />
                </span>
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
