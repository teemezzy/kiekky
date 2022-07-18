import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from 'react-router-dom';
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
    <div className="feed-recommendation flex lg:w-[986px] m-auto ">
      <Info />

      <div className="  w-[672px] pt-10 videos bg-white rounded-xl ">

        <div className="    grid grid-cols-2 gap-[7px] lg:gap-[32px] w-[295px] lg:w-[567px]  m-auto ">

          {feed
            ? feed.map((feed, idx) => (
              <div key={idx} className="story-status relative border-2 border-white ">

                <div className=" ">
                  <div >


                    <div className="image ">
                      <div className="flex justify-end  ">
                        <div className="edit w-[25px] h-[25px] lg:w-[2.5rem] lg:h-[2.5rem] bg-[black] opacity-20  mt-1 absolute flex justify-center items-center rounded-full ">
                          <AiOutlineEdit size='1.4rem' color='white' />
                        </div>
                      </div>

                      <div className="flex    ">
                        <div className="edit absolute top-[32%] left-[33%] lg:top-[37%] lg:left-[40%] ">
                          <BsPlay size='3.5rem ' color='white' />
                        </div>
                      </div>
                      <div className="div  ">
                        <img
                          className=" lg:w-[264px] w-[144px] h-[148px]  lg:h-[271px] rounded-md"
                          src={feed.image}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            : null}

        </div>



      </div>
    </div>
  );
}

export default PersonalVideo;
