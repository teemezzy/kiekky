import { useForm } from 'react-hook-form'
import { MidNav } from '../components'
import {bgLogin } from '../assets'
import './AccountSetup.css'

import React from 'react';

function ResetPassword() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit= (data, errors) => {
        console.log(data);
      }

    return (
        <div className="flex relative m-auto ">
               <MidNav  className="lg:hidden block" />
      
      
        <div className="background w-2/5 hidden lg:block ">
          <img className=" h-full" src={bgLogin} alt="Login" />
        </div>

        <div className="container w-4/5 md:w-1/2 m-auto lg:mx-auto  lg:w-1/3 border-1 box-border mt-[4rem] lg:mt-[10rem] ">
          <h1 className="welcome text-3xl pt-[3rem] mb-2 font-bold ">Account Set Up</h1>
          <p className='text-sm mb-5 text-[gray]'>Kindly provide the required details to set up your account.</p>
          
            <form onSubmit={handleSubmit(onSubmit)}>

<label >1. Gender</label>
<p className='text-sm mb-5 text-[gray]'>Check one option that reflexs your gender</p>

<div className="gender_select flex flex-col mb-8 ">

<input type="radio"  name="gender" id='test' value='I am a woman'  /> 
<label className=' outline-none mb-5 text-[gray] rounded-md py-2 px-5 bg-[#F6F4FF] ' htmlFor="test">I am a woman</label>

<input type="radio"  name="gender" id='test2' value='I am a man'  /> 
<label className=' outline-none text-[gray] rounded-md py-2 px-5 bg-[#F6F4FF] ' htmlFor="test2">I am a man</label>

</div>

<label className=''>2. Prefrence</label>
<p className='text-sm mb-5 text-[gray]'>What are you looking for</p>

<div className="gender_select flex flex-col ">

<input type="checkbox"  name="genderP" id='test' value='I am a woman'  /> 
<label className=' outline-none text-[gray] mb-5 rounded-md py-2 px-5 bg-[#F6F4FF] ' htmlFor="test4">I am a woman</label>

<input type="checkbox"  name="genderP" id='test2' value='I am a man' /> 
<label className=' outline-none text-[gray] rounded-md py-2 px-5 bg-[#F6F4FF] ' htmlFor="test4">I am a man</label>

</div>



<button className=' text-white w-full mt-10 rounded-md py-3 px-auto bg-[#6A52FD] '>
Submit </button>
</form>
      </div>  </div>
    );
}

export default ResetPassword;