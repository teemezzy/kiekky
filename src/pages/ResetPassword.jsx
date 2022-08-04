import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoginNav } from "../components";
import { bgLogin } from "../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPass, reset } from "../Redux/features/otp/resetpasswordSlice";
import Spinner from "../container/Spinner";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";

function ResetPassword(userdata) {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);
  const { register, handleSubmit, errors } = useForm();
  const { resetPass, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.otptoken
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data, userdata, errors) => {
    if (data.password !== data.confirmpassword) {
      toast.error("Password mismatch");
    } else {
      const passData = {
        email: {userdata},
        otp: otp,
        new_password: data.password,     
      }

      console.log(passData)
      dispatch(resetPass(passData))
      dispatch(reset())
    };
  };
  
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && isLoading) {
      navigate("/success");
      return <Spinner />;
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
        <h1 className="welcome text-3xl pt-[3rem] mb-2 font-bold ">
          Reset Password
        </h1>
        <p className="text-sm mb-5 text-[gray]">Please enter a new password.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Otp_input flex justify-center items-center">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span style={{ width: "1rem" }}> </span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              border: "1px solid #6A52FD",
              borderRadius: "8px",
              width: "3rem",
              height: "54px",
              fontSize: "16px",
              color: "#000",
              fontWeight: "400",
              careColor: "blue",
            }}
            focusStyle={{ outline: "none" }}
          />
        </div>

          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password "
            className="mb-3 outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] "
            {...register("password", { required: true })}
          />
          <label className="">Confirm New Password</label>
          <input
            type="password"
            placeholder="Re-type new password"
            className="outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] "
            {...register("confirmpassword", { required: true })}
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

export default ResetPassword;
