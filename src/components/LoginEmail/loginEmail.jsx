import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";

// import { login } from "../../redux/userSlice";
// import { useParams } from "react-router-dom";

const LoginEmail = () => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [login, {isLoading}]= useLoginMutation()
  const dispatch = useDispatch();
  const onSubmit = async (e, data, errors) => {
    console.log(data);
    setCredentials(data, errors);

      try {
        const userData = await login ({  email, password }).unwrap()
        dispatch( setCredentials ({...userData, email }))
        setEmail('')
        setPassword('')
        navigate('/home')
      } catch (error){
          if (!error?.originalStatus) {
            // isLoading: true until timeout occurs
            setErrorMsg('Server Not Responding, Try again later.');
        } else if (error.originalStatus === 400) {
            setErrorMsg('Please Check Email or Password');
        } else if (error.originalStatus === 401) {
            setErrorMsg('Unauthorized User');
        } else if (error.originalStatus === 404) {
          setErrorMsg('User Not Found');
        } else {
            setErrorMsg('Login Failed');
        }
      }

  };

  return (
    <div>
      <div className="form-container ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <p className={`text-[#e03434] text-center mb-5 ${errorMsg ? "errmsg" : "offscreen"}`} aria-live="assertive">{errorMsg}</p>
            <label>Email</label>
            <input
              type="email"
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
              <span className="text-xs text-[#6A52FD]" onClick={()=>navigate('/forgotpassword')}>Forgot password?</span>{" "}
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

export default (LoginEmail);
