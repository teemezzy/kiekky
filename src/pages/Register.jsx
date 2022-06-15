import React, { useEffect, useState, useRef } from "react";
import { bgLogin } from "../assets";

const USER_REGEX = /^[A-z][A-z0-9-_]{6,26}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  // Srt Page Title 
  useEffect(() => {
    document.title = "Register | Kiekky";
  }, []);

  
  return (
    <div>
      <div className="flex">
        <div className=''>
          <img src={bgLogin} alt="bg-hero-signup" className=' bg-center w-[684px] h-[1024px]'/>
        </div>

        <div>
          <form action="">
            <label htmlFor="">
              UserName
              <input type="text" className='border-2'/>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
