
import { useForm } from 'react-hook-form'
import { MidNav } from '../components'
import {bgLogin } from '../assets'
import {Link }from 'react-router-dom'
// import OTPInput, {ResendOTP} from 'otp-input-react' 
import React, {useEffect, useState} from 'react'

function OTPVerification() {
  useEffect(() => {
    document.title = "OTP SetUp | Kiekky";
  }, []);
    const { register, handleSubmit, errors } = useForm();
// const [OTP, setOTP] = useState('')
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
          <h1 className="welcome text-3xl pt-[3rem] mb-2 font-bold ">Get Started</h1>
          <p className='text-sm mb-5 text-[gray]'>Kindly provide the required details to set up your account.</p>

          
            <form onSubmit={handleSubmit(onSubmit)}>

<div className="Otp_input flex justify-center ">
 
  <input  type="text"  className=' mx-2 outline-none w-10 border-[0.1rem] border-[#6A52FD] rounded-md py-2 text-center bg-[#F6F4FF] ' autoFocus name="" id="" />
  <input type="text" className='mx-2 outline-none w-10 border-[0.1rem] border-[#6A52FD] rounded-md py-2 text-center bg-[#F6F4FF] ' name="" id="" />
  <input type="text" className='mx-2 outline-none border-[0.1rem] border-[#6A52FD] w-10  rounded-md py-2 text-center bg-[#F6F4FF] ' name="" id="" />
  <input type="text" className='mx-2 outline-none w-10 border-[0.1rem] border-[#6A52FD] rounded-md py-2 text-center bg-[#F6F4FF] ' name="" id="" />
  <input type="text" className='mx-2 outline-none  w-10 border-[0.1rem] border-[#6A52FD] rounded-md py-2  text-center bg-[#F6F4FF] 'name="" id="" />
  <input type="text" className='mx-2 outline-none  w-10 border-[0.1rem] border-[#6A52FD] rounded-md py-2  text-center bg-[#F6F4FF] 'name="" id="" />
  
 
</div>
<button className=' text-white w-full mt-10 mb-4 rounded-md py-3 px-auto bg-[#6A52FD] '>
Verify </button>

</form>
<p className="text-center my-5 text-sm ">
            Didn't receive an OTP?
            <Link to="/register" className="mx-1 text-[#6A52FD]">
              Resend OTP
            </Link>
          </p>
      </div> 

</div>
//       <OTPInput 
//       value = {OTP}
//       onChange= {setOTP} 
//       autoFocus
//       OTPLength= {6}
//       otpType='number'
//       disabled={false}
//       secure
//       />

      
// <ResendOTP handleResendClick= {()=> 
//   console.log("Resend clicked")} />

     



    );
}


export default OTPVerification;