

import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { Recommendations } from '../../components'

function ProfilePost() {
  const [feed, setFeed] = useState([]);


  const url = "https://fakerapi.it/api/v1/persons?_quantity=10";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="feed-recommendation flex gap-[50px] lg:w-[986px] m-auto ">

<<<<<<< HEAD
    <div className=" lg:w-[672px] w-[347px]">
      {feed
        ? feed.map((feed, idx) => (
          <div
            key={idx}
            className="bg-white py-[30px] w-[347px] rounded-lg mb-5 lg:w-[672px] lg:h-[625px]"
          >
            <div>
              <div className=" lg:w-[586px] w-[294px] m-auto ">
                <div className=" flex  space-x-[18px] lg:space-x-[12px] items-center  ">
                  <div className="feed-image">
=======
      <div className=" lg:w-[672px] w-[327px] ">
        {feed
          ? feed.map((feed, idx) => (
            <div
              key={idx}
              className="bg-white lg:py-[17px] py-[30px] w-[327px] rounded-lg mb-5 lg:w-[672px] lg:h-[625px]  "
            >
              <div>
                <div className=" lg:w-[586px] w-[294px] m-auto ">
                  <div className=" flex  space-x-[18px] lg:space-x-[12px] items-center  ">
                    <div className="feed-image">
>>>>>>> 254a8c89575cf83c1b09ebac8f550609c7b83717

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
                        <p className="md:text-sm sm:text-[0.4rem] text-[#BDBDBD] font-thin flex items-center">
                          <span className=" text-[#BDBDBD] ">
                            <MdOutlineLocationOn />
                          </span>
                          {feed.address.country},
                          {feed.address.city}
                          {/* Lagos, Nigeria */}
                        </p>
                        <p className="text-[#BDBDBD] font-thin hidden lg:block text-sm">
                          2 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" m-auto w-[294px] py-[1rem] lg:w-[586px]">
                  <p>{feed.email}.</p>
                </div>
                <div className=" m-auto md:h-[450px] w-[300px] lg:w-[586px] ">
                  <img
                    loading="lazy"
                    decoding="async"
                    className=" w-[290px] h-[290px]  lg:w-[586px] lg:h-[430px] rounded-lg"
                    src={feed.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))
          : null}
      </div>
      <Recommendations />
    </div >
  );
}

export default ProfilePost;
