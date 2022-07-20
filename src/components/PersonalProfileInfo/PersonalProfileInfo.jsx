import React, { useState, useEffect } from "react";
// import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
// import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom'



function PersonalProfileInfo() {
    const [feed, setFeed] = useState([]);

    const url = "https://fakerapi.it/api/v1/books?_quantity=1";

    useEffect(() => {
        axios.get(url).then((response) => setFeed(response.data.data));
    }, []);

    return (
        <div className=" flex mt-10  w-[326px] lg:w-[984px]  ">
            <div className=" lg:w-[984px] w-[326px] ">
                {feed
                    ? feed.map((feed, idx) => (
                        <div
                            key={idx}
                            className="story-status   rounded-xl bg-white "            >

                            <div className="">
                                <div className=" w-[284px] lg:w-[892px] m-auto">
                                    <div className="icons pt-5">
                                        <p className="flex justify-end">

                                            <label htmlFor="small-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle" className="sr-only peer" />
                                                <div className="w-[40px] h-[1.2rem] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#A8A8A8] peer-checked:after:translate-x-[1rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Stealth mode</span>
                                            </label>

                                        </p>
                                    </div>


                                    <div className="pic-not  flex  gap-2 items-start  ">
                                        <div className="feed-image ">
                                            <img
                                                className=" min-w-[4rem]  max-h-[4rem]  md:min-w-[6rem]  md:min-h-[6rem] p-[2.5px] rounded-[50%]"
                                                src={feed.image}
                                                alt="icon"
                                            />
                                        </div>

                                        <div className="lg:w-[42rem] mt-[1rem] sm:w-[17rem] md:w-[23rem] ml-5">

                                            <p className="font-[700] text-[24px] ">{feed.author}</p>
                                            <p className="text-[#BDBDBD] text-sm ">@{feed.author}</p>




                                            <p className="icons text-[#828282] mt-4 mb-5  ">
                                                {feed.description}
                                            </p>

                                            <div className="buttons mt-9 text-sm space-x-5 space-y-7 pb-4  hidden lg:block">
                                                <button className=' w-[8rem] text-xs lg:text-base lg:w-[8rem] px-2 lg:px-6 py-[0.4rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Edit Profile</button>
                                                <NavLink to='/share'>  <button className=' w-[5rem] text-xs lg:text-base lg:w-[8rem] lg:px-6 py-1 text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg ' type="submit">Share</button> </NavLink>

                                            </div>
                                        </div>


                                    </div>
                                    <div className="buttons flex items-center justify-center  py-[2rem] space-x-5 lg:space-y-7   lg:hidden block">
                                        <button className=' w-[8rem]  lg:w-[8rem]  px-6 py-[0.5rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Edit Profile</button>
                                        <NavLink to='/share'>  <button className=' w-[8rem] px-[2.5rem] py-2 text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg ' type="submit">Share</button> </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                    : null}
            </div>

        </div>
    );
}

export default PersonalProfileInfo;
