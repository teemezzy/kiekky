import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { Post } from "../../components";
import { NavLink } from "react-router-dom";
import FeedsSkeleton from "./FeedsSkeleton";
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
                className="bg-white py-[17px] lg:py-[30px] m-auto rounded-lg mb-5 lg:w-[672px] lg:h-[625px] h-[440px] "
              >
                <div>
                  <div className="mb-7 lg:w-[672px] w-[375px] m-auto">
                    <div className=" flex space-x-[15px] w-[300px] px-[1rem] lg:space-x-[12px] items-center">
                      <div className="feed-image max-w-[50px] h-[50px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full">
                        <NavLink to="/user_profile">
                          <img
                            loading="lazy"
                            decoding="async"
                            className="object-fill rounded-full"
                            src={result}
                            alt="icon"
                          />
                        </NavLink>
                      </div>

                      <div className="w-[17rem] md:w-[23rem] lg:w-[506.67px]">
                        <NavLink to="/user_profile">
                          <p className="font-[700] ">{feed.user.username}</p>
                        </NavLink>

                        <div className="flex justify-between lg:w-[506.67px] text-gray text-sm ">
                          <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-center">
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

                    <div className=" m-auto w-[375px] py-1 lg:w-[672px]">
                      <div className="  w-[300px] p-[1rem] lg:w-[586px] ">
                        <p>{feed.body ? feed.body : " "}</p>
                      </div>
                      <div
                        // onLoad={(e) => (e.target.style.display = "inline-block")}
                        // onLoad={(e) => (e.target.style.display = "inline-block")}
                        className="relative  m-auto w-[375px] h-[290px] lg:w-[672px] lg:h-[490px] rounded-lg"
                      >
                        <img
                          className="object-contain w-full h-full"
                          src={result}
                          alt=""
                        />
                      </div>
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
