


import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {NavLink} from 'react-router-dom'
import { LoginNav } from "../components";
import { bgLogin } from "../assets";
const PasswordSucess = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
  };


  return (
    <div className="flex relative w-[352px] lg:w-full m-auto ">
      <LoginNav className="lg:hidden block" />

      <div className="background  lg:w-2/5 hidden lg:block ">
        <img className=" h-full" src={bgLogin} alt="Login" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
        <h1 className=" font-bold text-5xl mt-32 text-[#212121] ">Successful </h1>
        <p className="my-7 text-[#666666] ">
          Password reset successful. Please continue to login.
        </p>
        

       <NavLink to='/login' > 

       <button className=" text-white w-full mt-10 mb-4 rounded-md py-3 px-auto bg-[#6A52FD] ">
          Login
        </button>
        </NavLink>
       
      </form>
    </div>
  );
 };

export default PasswordSucess;
