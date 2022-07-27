import { useForm } from 'react-hook-form'
import { LoginNav } from '../components'
import {bgLogin } from '../assets'

import React from 'react';

function ResetPassword() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit= (data, errors) => {
        console.log(data);
      }

    return (
        <div className="flex relative m-auto ">
               <LoginNav  className="lg:hidden block" />
      
      
        <div className="background w-2/5 hidden lg:block ">
          <img className=" h-full" src={bgLogin} alt="Login" />
        </div>

        <div className="container w-4/5 md:w-1/2 m-auto lg:mx-auto  lg:w-1/3 border-1 box-border mt-[4rem] lg:mt-[10rem] ">
          <h1 className="welcome text-3xl pt-[3rem] mb-2 font-bold ">Reset Password</h1>
          <p className='text-sm mb-5 text-[gray]'>Please enter a new password.</p>
          
            <form onSubmit={handleSubmit(onSubmit)}>

<label >New Password</label>
<input type="password" placeholder='Enter new password ' className='mb-3 outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] ' />
<label className=''>Confirm New Password</label>
<input type="password" placeholder='Re-type new password' className='outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] ' />

<button className=' text-white w-full mt-10 mb-4 rounded-md py-3 px-auto bg-[#6A52FD] '>
continue </button>
</form>
      </div>  </div>
    );
}

export default ResetPassword;