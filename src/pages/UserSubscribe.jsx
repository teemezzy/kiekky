// import axios from 'axios';
import React from 'react';

import { Sidebar, UserNav, Subscribe, MobileNav } from '../components'




function UserSubscribe(props) {
  return (
    <div className="notifications h-screen bg-[#F9FAFA]">
      <UserNav />
      <div className="flex mt-[6rem] mb-[5rem] bg-[#F9FAFA] pt-8 ">

        <div className="   h-[100%] hidden lg:block sidebar_prt ">
          <Sidebar />
        </div>
        <div className='w-[327px] lg:w-[984px] m-auto'>
          <Subscribe />
        </div>
        <MobileNav />
      </div>
    </div>
  );
}

export default UserSubscribe;



      {/* <div className="flex justify-between w-[295px] m-auto block lg:hidden  ">
        <div className="flex  space-x-3 items-center">
          <p>Members</p>
          <p className=" text-sm text-[#999999] py-1 rounded-md ">Gender: </p>
          <button className=" border-[1px] border-[#E5E5E5]  text-[#999999] px-4 py-1 text-xs  rounded-[0.3rem]">
            Male
          </button>
          <button className="bg-[#6a52fd] text-white rounded-[0.3rem] px-4 text-xs py-1">
            Female
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="flex relative  mb-3  space-x-6 items-center">
            <input
              className=" p-2 block  pl-12 sm:text-sm focus:outline-none border-[1px] border-[#6a52fd] rounded-lg focus:border-[gray]"
              type="text"
              name=""
              placeholder="Sort by : Location"
            />
            <div className="absolute h-[100%] flex items-center  ">
              <BsFilter className="h-5 w-5  text-white bg-[#6a52fd]" />
            </div>
          </div>
        </div>
      </div> */}