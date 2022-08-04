import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginNav } from "../components";
import { bgLogin } from "../assets";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../container/Spinner";
import { reset } from "../Redux/features/authSlice";

const Redirect = () => {
  const [loading, setLoading] = useState(false);
  const { isLoading, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    setLoading(true);
    window.location.reload(true);
  };

  if (isLoading) {
    dispatch(reset());
    return <Spinner />;
  }

  return (
    <div className="flex relative w-[352px] lg:w-full m-auto ">
      <LoginNav className="lg:hidden block" />
      <div className="background  lg:w-2/5 hidden lg:block ">
        <img className=" h-full" src={bgLogin} alt="Login" />
      </div>
      <div className=" mx-auto">
        <h1 className=" font-bold text-2xl lg:text-4xl mt-32 text-[#212121] ">
          Account Created Successfully
        </h1>
        <p className="my-7 text-[#666666] ">
          Your account has been successfully created. Please continue to login.
        </p>
        <NavLink to="/login">
          <button
            onClick={handleClick}
            className=" text-white w-full mt-10 mb-4 rounded-md py-3 px-auto bg-[#6A52FD] "
          >
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Redirect;
