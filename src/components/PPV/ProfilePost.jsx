import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { NavLink, useParams } from 'react-router-dom';
import { Recommendations } from '../../components'

function ProfilePost() {
  const [feed, setFeed] = useState([]);
  const {id} = useParams();


  const url = "https://fakerapi.it/api/v1/persons?_quantity=10";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="feed-recommendation flex gap-[50px] lg:w-[986px]  m-auto ">

      <div className=" lg:w-[672px] m-auto lg:max-w-full ">
        {feed
          ? feed.map((feed, idx) => (
            <div
              key={idx}
              className="bg-white  w-[100vw] py-[17px] lg:py-[30px] m-auto rounded-lg mb-10 pb-5  lg:w-[672px] lg:h-[625px] h-[440px]  "
            >
              <div>
                <div className=" lg:w-[672px]  m-auto">
                  <div className=" flex space-x-[15px] w-[300px] px-[1rem] lg:space-x-[12px] items-center ">
                    <div className="feed-image ">

                      <NavLink to={`/user_profile/${id}`}>
                        <img

                          className="  max-w-[50px] h-[50px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                          // src={feed.image}
                          alt="dp"
                        />
                      </NavLink>
                    </div>

                    <div className="  w-[17rem] md:w-[23rem] lg:w-[506.67px]">
                      <NavLink to={`/user_profile/${id}`}>

                        <p className="font-[700] ">{feed.firstname}</p>
                      </NavLink>

                      <div className=" flex justify-between lg:w-[506.67px] text-gray text-sm ">
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
                <div className=" m-auto w-full py-1 lg:w-[672px]">
                  <div className="w-[300px] p-[1rem] lg:w-[586px] ">
                  <p>{feed.email}.</p>
                  </div>
                </div>
                <div className=" relative m-auto w-full h-[290px] lg:w-[672px] lg:h-[460px] py-5 rounded-lg">
                  <img
                    loading="lazy"
                    decoding="async"
                    className=" object-contain w-full h-full"
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
