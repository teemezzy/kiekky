import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Info from "./Info";
import { AiOutlineEdit } from 'react-icons/ai'
import { BsPlay } from 'react-icons/bs'

const PersonalVideo = () => {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=20";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="feed-recommendation md:flex justify-center lg:justify-start lg:items-start sm:items-center sm:w-[100vw] lg:w-[986px] m-auto ">
      <Info />


      <div className=" w-[90%] px-4 lg:px-0 m-auto rounded-md md:ml-6 md:px-12 lg:w-[42rem] pt-10 videos bg-white">
        {feed
          ? feed.map((feed, idx) => (
            <div key={idx} className="story-status relative">
              
              <div className="flex justify-center items-baseline  ">
                  <div className="edit   absolute lg:top-[37%] top-9 ">
                    <BsPlay size='4rem ' color='white' />
                  </div>
                </div>
                
              <div className="image ">
                <div className="flex justify-end p-1">
                  <div className="edit w-[2.5rem] h-[2.5rem] bg-[black] opacity-20  mt-1 absolute flex justify-center items-center rounded-full ">
                    <AiOutlineEdit size='1.5rem' color='white' />
                  </div></div>

               
                <img
                  className=" w-[17rem] h-[7rem] lg:h-[16rem] rounded-md"
                  src={feed.image}
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

export default PersonalVideo;
