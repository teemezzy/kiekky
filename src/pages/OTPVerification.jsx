
import { useForm } from 'react-hook-form'
import { MidNav } from '../components'
import {bgLogin } from '../assets'
import {Link }from 'react-router-dom'
import OtpInput from "react-otp-input" 

import React, {useEffect, useState} from 'react'

function OTPVerification() {
  useEffect(() => {
    document.title = "OTP SetUp | Kiekky";
  }, []);
    const { register, handleSubmit, errors } = useForm();
const [OTP, setOTP] = useState('')
const handleChange = (OTP) => setOTP(OTP);
    const onSubmit= (OTP, errors) => {
        console.log(OTP);
      }





    return (
        <div className="flex relative m-auto ">
               <MidNav  className="lg:hidden block" />
      
      
        <div className="background w-2/5 hidden lg:block ">
          <img className=" h-full" src={bgLogin} alt="Login" />
        </div>

      <div className="background w-2/5 hidden lg:block ">
        <img className=" h-full" src={bgLogin} alt="Login" />
      </div>

          
            <form 
            onSubmit={handleSubmit(onSubmit)}
            >

<div className="Otp_input flex justify-center ">
 <OtpInput 
value={OTP} onChange={handleChange} 

 numInputs={6} separator={<span style={{width:"1rem"}}> </span>} isInputNum={true}
shouldAutoFocus = {true} inputStyle ={{ border: "1px solid #6a52fd",
borderRadius:"8px", width:"3rem", height:"54px", fontSize: "12px", color:"#000", fontWeight: "400", careColour:"blue"
}} focusStyle={{ outline:"none"}}

/>
  
  
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

 );
}

export default OTPVerification;
