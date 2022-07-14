

import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Info from "./Info";
import Post from '../Post/Post'

function PersonalWall() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=10";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="feed-recommendation md:flex justify-center lg:justify-start lg:items-start sm:items-center lg:w-[986px] m-auto ">
      <Info />
      <div className="wall w-[90vw] m-auto lg:w-full ">

      <div className="   ">
        <Post />
        {feed
          ? feed.map((feed, idx) => (
            <div
              key={idx}
              className="story-status bg-white py-4 rounded-lg mb-5"
            >
              <div>
                <div className="postItem  items-center mb-7 ">
                  <div className=" flex gap-2 items-center ml-5 ">
                    <div className="feed-image">

                      <NavLink to='/user_profile'>
                        <img

                          className=" w-[4rem] lg:w-full h-[4rem] p-[2.7px] rounded-[50%]"
                          src={feed.image}
                          alt="icon"
                        />
                      </NavLink>
                    </div>

                    <div className="lg:w-[42rem] sm:w-[17rem] md:w-[23rem]">
                      <NavLink to='/user_profile'>

                        <p className="font-[700]">{feed.firstname}</p>
                      </NavLink>

                      <div className="location flex justify-between  pr-5 text-gray text-sm ">
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

                  <div className="caption pt-5 mx-5">
                    <p>{feed.email}.</p>
                  </div>
                </div>

                <div className="post-img h-[9rem] md:h-[10rem] flex justify-around mx-5">
                  <img
                    className=" w-[9rem] lg:w-[16rem] rounded-lg"
                    src={feed.image}
                    alt=""
                  />
                  <img
                    className=" w-[9rem] lg:w-[16rem] rounded-lg"
                    src={feed.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))
          : null}

      </div></div>




    </div>
  );
}

export default PersonalWall;
