import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { BiCamera, BiVideoPlus } from "react-icons/bi";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import OpenChat from './OpenChat'



function User() {
  const [feed, setFeed] = useState([]);

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false)

  const url = "https://fakerapi.it/api/v1/persons?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="flex flex-col mt-10   lg:w-[984px] w-[327px] h-[246px]  ">

      {feed
        ? feed.map((feed, idx) => (
          <div
            key={idx}
            className="story-status px-[18px] lg:px-[64px] bg-white py-4 lg:w-[984px] w-[327px] "            >

            <div className="icons flex justify-between">
              <p className="flex items-center ">
                <NavLink to='/home'>
                  <BsArrowLeft color="gray" /> </NavLink>
              </p>
              <span > <BsThreeDotsVertical color="gray" /> </span>

            </div>


            <div className="pic-not mt-4 flex gap-2 items-start pt-4  ">
              <div className="feed-image ">
                <img
                  className=" max-w-[50px] h-[50px] lg:max-w-[100px] lg:h-[100px] p-[2.7px] rounded-[50%]"
                  src={feed.image}
                  alt="icon"
                />
              </div>

              <div className="lg:w-[42rem] w-[17rem] md:w-[23rem]">

                <p className="font-[700]">{feed.firstname}</p>

                <div className="location flex justify-between  pr-5 text-gray text-sm ">
                  <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-center">
                    <span>
                      <MdOutlineLocationOn color="gray" />
                    </span>
                    {feed.address.country},
                    {feed.address.city}
                    {/* Lagos, Nigeria */}
                  </p>

                </div>
                <div className="icons flex  space-x-3 mt-4">
                  <p className='text-sm'><BiCamera color="gray" /> </p> <span className='text-xs'>4</span>
                  <p className='text-sm'> <BiVideoPlus color="gray" /></p> <span className='text-xs'>2</span>
                </div>

                <div className="buttons mt-6 text-sm space-x-5 space-y-7 pb-4">
                  <button onClick={() => setShowMyModal(true)} className=' w-[8rem] text-xs lg:text-base lg:w-[8rem] px-2 lg:px-6 py-[0.4rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Open Chat</button>
                  <NavLink to='/subscribe'>  <button className=' w-[5rem] text-xs lg:text-base lg:w-[8rem] lg:px-6 py-1 text-[#6a52fd] border-[1px] border-[#6a52fd] text-white rounded-lg ' type="submit">Subscribe</button> </NavLink>

                </div>
              </div>

            </div>
          </div>

        ))
        : null}

      <OpenChat onClose={handleOnClose} visible={showMyModal} />

    </div>
  );
}

export default User;
