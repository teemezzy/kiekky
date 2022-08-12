import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { Post } from "../../components";
import { NavLink } from "react-router-dom";
import { VscLock } from "react-icons/vsc";

import FeedsSkeleton from "./FeedsSkeleton";
import Avatar from 'react-avatar'

import { useDispatch, useSelector } from "react-redux";
import { getfeeds } from "../../Redux/features/feeds/feedsSlice";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";

function Feeds() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { isError, isLoading, message } = useSelector((state) => state.posts);
  const { feeds } = useSelector((state) => state.feeds);
  const data = Object.entries(feeds).map(([key, value]) => {
    return value;
  });

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getfeeds());
    // setLoading(data)
  }, [isLoading, isError, message, dispatch]);

  return (
    <div className="">
      <Post />
      <div className="lg:w-[672px] m-auto w-full lg:max-w-full ">
        {/* {loading && <FeedsSkeleton cards={10} />} */}

        {
          data.map(function (feed, id) {
            let res = feed?.images;
            const result = res[0] ? res[0].url : null;
            // : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg";

            return (
              <div
                key={feed.id}
                className="bg-white pt-[17px] lg:pt-[30px] m-auto rounded-lg my-20  lg:w-[672px] h-full  "
              >
                <div>
                  <div className="mb-7 lg:w-[672px]  m-auto">
                    <div className=" flex space-x-[15px] w-[300px] px-[1rem] lg:space-x-[12px] items-center">
                      <div className=" ">
                        <NavLink to="/user_profile">
                          {res[0] ? <img
                            loading="lazy"
                            decoding="async"
                            className=" feed-image max-w-[60px] h-[60px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                            src={result}
                            alt=""
                          /> :
                            <div className="rounded-full "> <Avatar color='#6a52fd' size="60" round={true} name={feed.user.username} /> </div>

                          }
                        </NavLink>
                      </div>

                      <div className="w-[17rem] md:w-[23rem] lg:w-[506.67px]">
                        <NavLink to="/user_profile">
                          <p className="font-[700] ">{feed.user.username}</p>
                        </NavLink>

                        <div className="flex justify-between lg:w-[506.67px] text-gray text-sm ">
                          <p className="md:text-sm sm:text-[0.4rem] font-thin text-[gray] flex items-center">
                            <span>
                              <MdOutlineLocationOn color="gray" />
                            </span>
                            {feed.user.city.name}, {feed.user.country.name}
                          </p>
                          <p className="text-[gray] hidden lg:block text-sm w-24">
                            {new Date(feed.created_at).toLocaleString("en-us", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              second: "numeric",
                              hour12: true,
                              // timeZoneName: 'short'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" m-auto w-full py-1 lg:w-[672px]">
                      <div className="  w-[300px] p-[1rem] lg:w-[586px] ">
                        <p>{feed.body ? feed.body : " "}</p>
                      </div>

                          {result ?  <div className="relative m-auto w-full h-[290px] lg:w-[672px] lg:h-[460px] rounded-lg">
                        {feed.amount ? <div className=' inset-0 absolute   rounded-md bg-black bg-opacity-20 z-5 backdrop-blur-sm flex justify-center items-center'>
                           <div className="flex flex-col justify-center items-center">
                            <VscLock color="white" />
                            <p className="text-white mt-3 text-sm lg:text-base">Unlock for {feed.amount} tokens</p>
                           </div>
                           </div> : null }  
                        <img
                          className="object-contain w-full h-full"
                          src={result}
                          alt=""
                        />
                      </div> : null  }
                     
                    </div>
                  </div>
                </div>
              </div>
            );
          })
          // : null
        }
      </div>
    </div>
  );
}

export default Feeds;
