import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Members.css'
import { BsBell, BsFilter } from "react-icons/bs";


function HotPicks(props) {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/persons?_quantity=40";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className=' flex flex-col justify-center ml-4 lg:ml-0 lg:justify-start items-center lg:items-start lg:w-[68rem]'>
      <div className="top-text flex justify-between lg:w-[66rem] ">


        <div className="sub flex lg:px-6  space-x-3 items-center">
          <p>Members</p>
          <p className=' text-sm text-[#999999]  py-1 rounded-md '>Gender: </p>
          <button className=' border-[1px] border-[#E5E5E5]  text-[#999999] px-4 py-1 text-xs  rounded-[0.3rem] '>Male</button>
          <button className='bg-[#6a52fd] text-white rounded-[0.3rem] px-4 text-xs py-1'>Female</button>

        </div>
        <div className="hidden lg:block">
          <div className="flex relative  mb-3  space-x-6 items-center">

            <input className=" p-2 block  pl-12 sm:text-sm focus:outline-none border-[1px] border-[#6a52fd] rounded-lg focus:border-[gray]" type="text" name="" placeholder="Sort by : Location" />
            <div className="absolute h-[100%] flex items-center  ">
              <BsFilter className="h-5 w-5  text-white bg-[#6a52fd]" />
            </div> </div>
        </div>

      </div>
      <div className="members images lg:w-[64rem] m-auto mt-2">

        {story
          ? story.map((story, idx) => (
            <div key={idx} className="members-feed ">
              <div className=" rounded-xl ">
                <img
                  className=" mb-2 w-[9rem] h-[9.2rem] lg:w-[14.5rem] lg:h-[14.5rem] rounded-xl "
                  src={story.image}
                  alt="icon"
                />
              </div>
              <div>
                <h5 className="text-sm w-14 truncate"> {story.title} </h5>
              </div>
            </div>
          ))
          : null}
      </div>

    </div>
  );
}

export default HotPicks;