import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login,  reset  } from "../../Redux/features/authSlice";
import {toast} from 'react-toastify'
import Spinner from "../../container/Spinner";

const LoginEmail = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const {handleSubmit, register, formState: { errors }} = useForm({});
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const { message } = useSelector((state) => state.message);
  // const location = useLocation();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  console.log(user, isError);

  const onSubmit = (data) => {
    const userdata = {
      email: data.email,
      password: data.password,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      grant_type: process.env.REACT_APP_GRANT_TYPE

    };
    dispatch(login(userdata));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate ('/feeds')
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);
     
  if (isLoading) {
    return  <Spinner />;
  }

  const handleClick = () => {
    setLoading(true);
  };
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
              className="outline-none w-full mt-1 rounded-lg h-[56px] px-5 bg-[#F6F4FF] "
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
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </span>{" "}
            </label>
            <input
              type="password"
              placeholder="Enter here"
              className="w-full outline-none mt-1 rounded-lg h-[56px] px-5 bg-[#F6F4FF]"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p className="text-[#e03434] text-sm">
                Please check your password
              </p>
            )}
            <button onClick={handleClick} className=" text-white w-full mt-10 rounded-md py-3 px-auto bg-[#6A52FD] ">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
