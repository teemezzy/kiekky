import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MidNav } from "../components";
import { bgLogin } from "../assets";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { otptoken, resendotp } from "../Redux/features/otp/otpSlice";
import Spinner from "../container/Spinner";
import { toast } from "react-toastify";

const OTPVerification = () => {
  useEffect(() => {
    document.title = "OTP SetUp | Kiekky";
  }, []);
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);

  const {
    otp: otpdata,
    isError,
    isSuccess,
    isLoading,
    message,
  } = useSelector((state) => state.otptoken);
  const { user } = useSelector((state) => state.auth);
  const { data } = user;
  const { email } = data;
  console.log(email);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || otpdata) {
      navigate("/user_setup");
    }
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleresend = () => {
    // console.log(email);
    dispatch(resendotp(email));
  };

  const onSubmit = (data) => {
    const userdata = {
      email: email,
      otp: otp,
    };
    // console.log(userdata);
    dispatch(otptoken(userdata));
  };

  return (
    <div className="flex relative w-[352px] lg:w-full m-auto ">
      <MidNav className="lg:hidden block" />

      <div className="background  lg:w-2/5 hidden lg:block ">
        <img className=" h-full" src={bgLogin} alt="Login" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
        <h1 className=" font-bold text-5xl mt-32">Get Started </h1>
        <p className="mb-10 text-[#666666] ">
          Please enter the verification code sent to {user.data.email}.
        </p>
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
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              careColor: "blue",
            }}
            focusStyle={{ outline: "none" }}
          />
        </div>

        <button className=" text-white w-full mt-10 mb-4 rounded-md py-3 px-auto bg-[#6A52FD] ">
          Verify
        </button>
        <p className="text-center text-gray-400 my-5 text-sm ">
          Didn't receive an OTP?
          <button className="mx-1 text-[#6A52FD]" onClick={handleresend}>
            {" "}
            Resend OTP
          </button>
        </p>
      </form>
    </div>
  );
};

export default OTPVerification;
