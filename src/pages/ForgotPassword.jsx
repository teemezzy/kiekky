import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoginNav } from "../components";
import { bgLogin } from "../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getPassword, reset } from "../Redux/features/otp/forPassSlice";
import Spinner from "../container/Spinner";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.verifyEmail
  );

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data, errors) => {
    const userdata = {
      email: data.email.toLowerCase(),
    };
    dispatch(getPassword(userdata));
    dispatch(reset());
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/reset_password");
    }
  });
  
  if (isLoading) {
    return <Spinner />;
  }

  const handleClick = (e) => {
    setLoading(true);
  };

  return (
    <div className="flex relative m-auto ">
      <LoginNav className="lg:hidden block" />
      <div className="background w-2/5 hidden lg:block ">
        <img className=" h-full" src={bgLogin} alt="Login" />
      </div>
      <div className="container w-4/5 md:w-1/2 m-auto lg:mx-auto  lg:w-1/3 border-1 box-border mt-[4rem] lg:mt-[10rem] ">
        <h1 className="welcome text-3xl pt-[3rem] mb-2 font-bold  ">
          Forgot Password
        </h1>
        <p className="text-sm text-[gray] mb-5">
          Please enter the email assigned to your account for password recovery.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] "
            {...register("email", { required: true })}
          />

          <input
            type="submit"
            value="Continue"
            className=" mt-5 w-full  bg-[#6A52FD] h-[46px] rounded-lg pl-4  text-white"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
