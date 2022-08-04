import React from "react";
import { Notfound } from "../assets";
import {NavLink} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="  ">
      <div className="md:w-[819px] w-[350px] lg:h-[505px] h-[800px] flex flex-col justify-center items-center m-auto">
        <div className="lg:w-[819px] lg:h-[505px] w-[350px]">
          <img src={Notfound} alt="404 Not Found"/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p
            className="lg:text-[24px] text-[#666666]">
            We are sorry...
          </p>
          <p
            className="lg:text-[24px] text-[#666666]">
            The page you requested for was not found
          </p>

          <div className='lg:w-[512px]'>
          <button className='w-[236px] bg-[#6A52FD] border-2 text-white'>Go Back</button>
          <button className='w-[236px] text-[#6A52FD] border-2 border-[#6A52FD]'><NavLink to='/'>Home</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
