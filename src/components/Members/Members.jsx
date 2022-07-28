import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Members.css";
import { NavLink } from "react-router-dom";
import { BsBell, BsFilter} from "react-icons/bs";
import { verified } from '../../assets'


function Members(props) {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/persons?_quantity=40";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className=" flex flex-col lg:w-[1000px] w-[366px] m-auto">
      <div className="flex justify-between lg:w-[996px] ">
        <div className="flex  space-x-2 items-center">
          <p>Members</p>
          <div className="flex space-x-[1px] bg-[#F6F4FF] " >
          <p className=" text-xs  text-[#999999] py-1 rounded-md ">Gender: </p>
          <select className="outline-none text-xs  w-[4rem] text-[#999999] bg-[#F6F4FF] " name="" id="">
            <option className="outline-none hover:bg-[#6a52fd]  border-none" value="Male">Male </option>
            <option className="outline-none hover:bg-[#6a52fd]  " value="Male">Female </option>
            <option className="outline-none hover:bg-[#6a52fd]  " value="Male">Both </option>
          </select>
          </div>
          {/* <button className=" border-[1px] border-[#E5E5E5]  text-[#999999] px-4 py-1 text-xs  rounded-[0.3rem]">
            Male
          </button>
          <button className="bg-[#6a52fd] text-white rounded-[0.3rem] px-4 text-xs py-1">
            Female
          </button> */}
        </div>
        <div className="block">
          <div className="flex relative  mb-3 space-x-2 lg:space-x-4 items-center">
            <input
              className=" p-2 w-[8rem] lg:w-[12rem] h-[25px] lg:h-[38px] block text-sm lg:text-base pl-5 lg:pl-9 sm:text-sm focus:outline-none border-[1px] border-[#6a52fd] rounded-md lg:rounded-lg focus:border-[gray]"
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
      <div className="  grid grid-cols-2 lg:grid-cols-4 gap-[7px]  w-[372px] lg:gap-[37px]  lg:w-[1001px] m-auto mt-5">
        {story
          ? story.map((story, idx) => (
            <div key={idx} className=" ">
              <div className=" rounded-xl relative  ">
                <div className=" absolute  inset-x-0 bottom-0 bg-opacity-70 names w-[184px] h-[36px] lg:w-[219px] lg:h-[43px] bg-[#A8A8A8] rounded-b-md ">
                  <p className=" flex pt-1 pl-3  text-white">{story.firstname}  </p>
                </div>

                <NavLink to='/user_profile' ><img
                  className="stats w-[184px] h-[178px] lg:w-[220px] lg:h-[237px] rounded-md "
                  src={story.image}
                  alt="icon"
                /> </NavLink> 
              </div>

            </div>
          ))
          : null}
      </div>
    </div>
  );
}

export default Members;
