import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { MidNav } from "../components";
import { bgLogin } from "../assets";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { otp } from "../Redux/features/authSlice";


const OTPVerification = () => {
  useEffect(() => {
    document.title = "OTP SetUp | Kiekky";
  }, []);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);


  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  console.log(user, isError);
  const onSubmit = (otp, errors) => {
    let userdata = {
      otp_code : otp.otp
    };

    dispatch(otp(userdata));
    console.log(otp);
  };

  return (
    <div className="flex relative m-auto ">  
      <MidNav className="lg:hidden block" />

      <div className="background w-2/5 hidden lg:block ">
        <img className=" h-full" src={bgLogin} alt="Login" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className= ' mx-auto'>
      <h1 className= ' font-bold text-5xl mt-32'>Get Started </h1>
      <p className='mb-10'>Please enter the verification code sent to s************@gmail.com</p>
        <div className="Otp_input flex justify-center items-center">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span style={{ width: "1rem" }}> </span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              border: "1px solid #6A52FD",
              borderRadius: "8px",
              width: "3rem",
              height: "54px",
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              careColour: "blue",
            }}
            focusStyle={{ outline: "none" }}
          />
        </div>

        <button className=" text-white w-full mt-10 mb-4 rounded-md py-3 px-auto bg-[#6A52FD] ">
          Verify
        </button>
        <p className="text-center text-gray-400 my-5 text-sm ">
        Didn't receive an OTP?
        <Link to="/login" className="mx-1 text-[#6A52FD]">
          Resend OTP
        </Link>
      </p>
      </form>
      
    </div>
  );
}

export default OTPVerification;
