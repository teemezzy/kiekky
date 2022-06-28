import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../Redux/Actions/authHead";

const LoginEmail = () => {
  

  const [errorMsg, setErrorMsg] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/home";
  
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;
  
  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data.email, data.password));
  };


    useEffect(() => {
      if (isLoggedIn) {
        navigate(redirect);
      }
    }, [isLoggedIn, navigate, redirect]);





  return (
    <div>
      <div className="form-container ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p
              className={`text-[#e03434] text-center mb-5 ${
                errorMsg ? "errmsg" : "offscreen"
              }`}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter here"
              className="outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] "
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="text-[#e03434] text-sm">Please check your email</p>
            )}

            <label className=" flex justify-between mt-5">
              Password
              <span
                className="text-xs text-[#6A52FD]"
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot password?
              </span>{" "}
            </label>
            <input
              type="password"
              placeholder="Enter here"
              className="w-full outline-none mt-1 rounded-md py-2 px-5 bg-[#F6F4FF]"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p className="text-[#e03434] text-sm">
                Please check your password
              </p>
            )}
            <button className=" text-white w-full mt-10 rounded-md py-3 px-auto bg-[#6A52FD] ">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
