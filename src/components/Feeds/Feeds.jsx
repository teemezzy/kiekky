import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { Post } from "../../components";
import { NavLink, useParams } from "react-router-dom";
import FeedsSkeleton from "./FeedsSkeleton";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import {
  getPost,
  reset,
} from "../../Redux/features/createPost/createPostSlice";
import { getfeeds } from "../../Redux/features/feeds/feedsSlice";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";

function Feeds() {
  // const [feed, setFeed] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // const {user } = useSelector((state)=> state.auth)
  const { posts, isError, isLoading, message } = useSelector(
    (state) => state.posts
  );
  const { feeds } = useSelector((state) => state.feeds);
  const data = Object.entries(feeds).map(([key, value]) => {
    return value;
  });

  const { id } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    console.log();
    dispatch(getfeeds());
  }, [getfeeds, isLoading, isError, message, dispatch]);

  return (
    <div className="div">
      <Post />

      <div className="lg:w-[672px] w-full lg:max-w-full ">
        {isLoading && <FeedsSkeleton cards={10} />}

        {
          data.map(function (feed, id) {
            let res = feed?.images;

            const result = res[0]
              ? res[0].url
              : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg";
            return (
              <div
                key={feed.id}
                className="bg-white py-[17px] lg:py-[30px]  w- rounded-lg mb-5 lg:w-[672px] lg:h-[625px] h-[440px] "
              >
                <div>
                  <div className="mb-7 lg:w-[672px] w-[375px] m-auto ">
                    <div className=" flex space-x-[15px] w-[300px] m-auto lg:space-x-[12px] items-center  ">
                      <div className="feed-image">
                        <NavLink to="/user_profile">
                          <img
                            loading="lazy"
                            decoding="async"
                            className=" max-w-[50px] h-[50px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                            // src={feed.data.images}
                            alt="icon"
                          />
                        </NavLink>
                      </div>

                      <div className="  w-[17rem]  md:w-[23rem] lg:w-[506.67px]">
                        <NavLink to="/user_profile">
                          <p className="font-[700] ">{feed.user.username}</p>
                        </NavLink>

                        <div className="location flex justify-between lg:w-[506.67px] text-gray text-sm ">
                          <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-center">
                            <span>
                              <MdOutlineLocationOn color="gray" />
                            </span>
                            {feed.user.city.name}, {feed.user.country.name}
                          </p>
                          <p className="text-[gray] hidden lg:block text-sm">
                            2 days ago
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" m-auto w-[375px] py-1 lg:w-[672px]">
                      <div className=" m-auto w-[300px] py-[1rem] lg:w-[586px] ">
                        <p>{feed.body}.</p>
                      </div>

                      <div className="  md:h-[450px] w-[375px] lg:w-[672px] ">
                        <img
                          loading="lazy"
                          decoding="async"
                          className=" z-50 w-[375px] h-[290px] lg:w-[672px] lg:h-[490px] rounded-lg"
                          src={result}
                          alt=""
                        />

                        {/* {feed.base_image.url} */}
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
