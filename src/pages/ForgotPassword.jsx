import { useForm } from 'react-hook-form'
import { LoginNav } from '../components'
import {bgLogin } from '../assets'
import { useNavigate } from 'react-router-dom';

import React from 'react';

function ForgotPassword() {
    const { register, handleSubmit, errors } = useForm();
const navigate = useNavigate()
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
          <h1 className="welcome text-3xl pt-[3rem] mb-2 font-bold  ">Forgot Password</h1>
          <p className='text-sm text-[gray] mb-5'>Please enter the email assigned to your account for password recovery.</p>
          
            <form onSubmit={handleSubmit(onSubmit)}>

<label >Email</label>
<input type="email" placeholder='Enter email' className='outline-none w-full mt-1 rounded-md py-2 px-5 bg-[#F6F4FF] ' />
<button className=' text-white mb-4 w-full mt-10 rounded-md py-3 px-auto bg-[#6A52FD] ' onClick={()=> navigate('/reset')}>
continue </button>
</form>
      </div>  </div>
    );
}

export default ForgotPassword;