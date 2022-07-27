import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BsBell, BsFilter, BsArrowLeft } from "react-icons/bs";
import { ribbon } from '../../assets'



function ViewAllHotPicks() {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/persons?_quantity=40";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className=" pt-[2rem] lg:w-[1000px] w-[327px] m-auto">
      <NavLink to='/community'> <p className="text-[#BDBDBDBD] "> < BsArrowLeft /> </p> </NavLink>
      <div className="flex justify-between items-center lg:w-[996px] m-auto">
        <div className="flex mt-4 space-x-3 items-center">
          <p>Hot Picks</p>
          <p className=" text-xs  text-[#999999] py-1 rounded-md ">Gender: </p>
          <select className="outline-none text-xs  w-[4rem] text-[#999999] bg-[#F6F4FF] " name="" id="">
            <option className="outline-none hover:bg-[#6a52fd]  border-none" value="Male">Male </option>
            <option className="outline-none hover:bg-[#6a52fd]  " value="Male">Female </option>
            <option className="outline-none hover:bg-[#6a52fd]  " value="Male">Both </option>
          </select>

        </div>
        <div className="block">
          <div className="flex relative  space-x-2 lg:space-x-4 items-center">
            <input
              className=" p-2 w-[7rem] lg:w-[12rem] h-[25px] lg:h-[38px] block text-sm lg:text-base pl-5 lg:pl-9 sm:text-sm focus:outline-none border-[1px] border-[#6a52fd] rounded-md lg:rounded-lg focus:border-[gray]"
              type="text"
              name=""
              placeholder=" Location"
            />
            <div className="absolute h-[100%] flex items-center  ">
              <BsFilter className="h-3 w-3 lg:w-5 lg:h-5  text-white bg-[#6a52fd]" />
            </div>
          </div>
        </div>
      </div>
      <div className="  grid grid-cols-2 lg:grid-cols-4 gap-[7px]  w-[331px] lg:gap-[37px]  lg:w-[1001px] m-auto mt-2">
        {story
          ? story.map((story, idx) => (
            <div key={idx} className=" ">
              <div className=" rounded-xl relative  ">
                <div className=" absolute  inset-x-0 bottom-0 bg-opacity-70 names w-[160px] h-[29px] lg:w-[219px] lg:h-[43px] bg-[#A8A8A8] rounded-b-md ">
                  <p className=" pl-3  text-white">{story.firstname}  </p>
                </div>
                <div className="absolute top-0 right-0">
                  <img src={ribbon} alt="" />
                </div>
                <img
                  className="stats w-[160px] h[160px] lg:w-[220px] lg:h-[237px] rounded-md "
                  src={story.image}
                  alt="icon"
                />
              </div>

            </div>
          ))
          : null}
      </div>
    </div>
  );
}

export default ViewAllHotPicks;
