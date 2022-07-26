import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Members.css";
import { BsBell, BsFilter } from "react-icons/bs";
import { verified } from '../../assets'

function HotPicks(props) {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/persons?_quantity=40";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className=" flex flex-col lg:w-[1000px] w-[327px] m-auto">
      <div className="flex justify-between lg:w-[996px] m-auto">
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
      </div>
      <div className="  grid grid-cols-2 lg:grid-cols-4 gap-[7px]  w-[331px] lg:gap-[37px]  lg:w-[1001px] m-auto mt-2">
        {story
          ? story.map((story, idx) => (
            <div key={idx} className=" ">
              <div className=" rounded-xl relative  ">
                <div className=" absolute  inset-x-0 bottom-0 bg-opacity-70 names w-[160px] h-[29px] lg:w-[219px] lg:h-[43px] bg-[#A8A8A8] rounded-b-md ">
                  <p className=" pl-3  text-white">{story.firstname}  </p>
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

export default HotPicks;
