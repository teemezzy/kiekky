import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { loginUser } from "../../auth/actions/userActions";
const LoginEmail = ({ loginUser }) => {
 

<<<<<<< HEAD

import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux'
import { loginUser } from '../../auth/actions/userActions';
const LoginEmail = ({loginUser}) => {
  const { register, handleSubmit , formState:{errors}} = useForm();
  const navigate = useNavigate();
  const onSubmit= (data, errors) => {
=======
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, errors) => {
>>>>>>> 72d06ea214f93686a11ebedec961082d53241439
    console.log(data);
    loginUser(data, errors);
  };

  return (
    <div>
      <div className="form-container ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter here"
              className="outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] "
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && (
              <p className="text-[#e03434] text-sm">Please check the email</p>
            )}

<<<<<<< HEAD
 <div className="form-container ">
  <div>

<form onSubmit={handleSubmit(onSubmit)}>

  <label>Email</label>
  <input type="email" placeholder='Enter here' className='outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] '{...register('email',
   { required:true,
   pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
{errors.email && <p className='text-[#e03434] text-sm'>Please check the email</p> }

  <label className=' flex justify-between mt-5'>Password  <span className='text-xs text-[#6A52FD]' onClick={()=> navigate('/forgotpassword')} > Forgot password?</span> </label>
  <input type="password" placeholder='Enter here' className='w-full outline-none mt-1 rounded-md py-2 px-5 bg-[#F6F4FF]' {...register('password',{ 
  required:true,
    pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}
    />
{errors.password && <p className='text-[#e03434] text-sm'>Password should begin with caps letter and contain a number</p> }
  <button className=' text-white w-full mt-10 rounded-md py-3 px-auto bg-[#6A52FD] '>
  Log In</button>
</form>


  </div>
  


 </div>
=======
            <label className=" flex justify-between mt-5">
              Password{" "}
              <span className="text-xs text-[#6A52FD]">Forgot password?</span>{" "}
            </label>
            <input
              type="password"
              placeholder="Enter here"
              className="w-full outline-none mt-1 rounded-md py-2 px-5 bg-[#F6F4FF]"
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {errors.password && (
              <p className="text-[#e03434] text-sm">
                Password should begin with caps letter and contain a number
              </p>
            )}
            <button className=" text-white w-full mt-10 rounded-md py-3 px-auto bg-[#6A52FD] ">
              Log In
            </button>
          </form>
        </div>
      </div>
>>>>>>> 72d06ea214f93686a11ebedec961082d53241439

      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email </label>
        <input
          className="outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] "
          placeholder="Enter here"
          type="email"
          id="email"
          // ref={userRef}
          // onChange={(e) => setUser(e.target.value)}
          // value={user}
          required
        />

        <label className=" flex justify-between mt-5" htmlFor="password ">
          Password
          <span className="text-xs text-[#6A52FD]">Forgot password?</span>
        </label>
        <input
          className="w-full outline-none mt-1 rounded-md py-2 px-5 bg-[#F6F4FF]"
          type="password"
          id="password"
          // onChange={(e) => setPwd(e.target.value)}
          // value={pwd}
          required
          placeholder="Enter password"
        />

        <button className=" text-white w-full mt-5 rounded-md py-3 px-auto bg-[#6A52FD] ">
          Log In
        </button>
      </form>
    </div>
  );
};

export default connect(null, { loginUser })(LoginEmail);
