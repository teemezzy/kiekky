

import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Info from './Info'
import Post from '../Post/Post'

function PersonalWall() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=50";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className=" lg:w-[984px] w-[327px]  flex ">
      <Info />
      <div>
      <Post />
      {feed
        ? feed.map((feed, idx) => (
          <div
            key={idx}
            className="bg-white py-[30px] w-[327px] rounded-lg mb-5 lg:w-[672px] lg:h-[440px]  "
          >
            <div>
              <div className="mb-7 lg:w-[586px] w-[294px] m-auto ">
                <div className=" flex  space-x-[18px] lg:space-x-[12px] items-center  ">
                  <div className="feed-image">

                    <NavLink to='/user_profile'>
                      <img

                        className="  max-w-[50px] h-[50px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                        src={feed.image}
                        alt="icon"
                      />
                    </NavLink>
                  </div>

                  <div className="  w-[17rem] md:w-[23rem] lg:w-[506.67px]">
                    <NavLink to='/user_profile'>

                      <p className="font-[700] ">{feed.firstname}</p>
                    </NavLink>

                    <div className="location flex justify-between lg:w-[506.67px] text-gray text-sm ">
                      <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-center">
                        <span>
                          <MdOutlineLocationOn color="gray" />
                        </span>
                        {feed.address.country},
                        {feed.address.city}
                        {/* Lagos, Nigeria */}
                      </p>
                      <p className="text-[gray] hidden lg:block text-sm">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" m-auto w-[294px] pt-5 lg:w-[586px]">
                  <p>{feed.email}.</p>
                </div>

              <div className=" m-auto md:h-[10rem] w-[294px] lg:w-[586px] flex justify-between ">
                <img
                  className=" w-[142px] h-[130px]  lg:w-[281px] lg:h-[256px] rounded-lg"
                  src={feed.image}
                  alt=""
                />
                <img
                  className=" w-[142px] h-[130px]  lg:w-[281px] lg:h-[256px] rounded-lg"
                  src={feed.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))
        : null}
    </div>
    </div>
  );
}

export default PersonalWall;
