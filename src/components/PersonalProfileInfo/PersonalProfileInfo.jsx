import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom'



function PersonalProfileInfo() {
    const [feed, setFeed] = useState([]);

    const url = "https://fakerapi.it/api/v1/books?_quantity=1";

    useEffect(() => {
        axios.get(url).then((response) => setFeed(response.data.data));
    }, []);

    return (
        <div className=" flex justify-center items-center notify  mt-10  mx-6  border-2  sm:w-[90%] m-auto lg:w-[60rem] ">

            {feed
                ? feed.map((feed, idx) => (
                    <div
                        key={idx}
                        className="story-status w-full px-4 bg-white py-4  "            >

                        <div className="icons">
                            <p className="flex justify-end">

                                <label for="small-toggle" class="inline-flex relative items-center mb-5 cursor-pointer">
                                    <input type="checkbox" value="" id="small-toggle" class="sr-only peer" />
                                    <div class="w-14 h-[1.3rem] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[2rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Stealth mode</span>
                                </label>

                            </p>
                        </div>


                        <div className="pic-not mt-4 flex gap-2 items-start pt-4   ">
                            <div className="feed-image ">
                                <img
                                    className=" min-w-[4rem]  max-h-[4rem]  md:min-w-[6rem]  md:min-h-[6rem] p-[2.5px] rounded-[50%]"
                                    src={feed.image}
                                    alt="icon"
                                />
                            </div>

                            <div className="lg:w-[42rem] sm:w-[17rem] md:w-[23rem] ml-5">

                                <p className="font-[700]">{feed.author}</p>
                                <p className="text-[#BDBDBD] text-sm ">@{feed.author}</p>




                                <p className="icons text-[#828282] mt-4  ">
                                    {feed.description}
                                </p>

                                <div className="buttons mt-9 text-sm space-x-5 space-y-7 pb-4  hidden lg:block">
                                    <button className=' w-[8rem] text-xs lg:text-base lg:w-[8rem] px-2 lg:px-6 py-[0.4rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Edit Profile</button>
                                    <NavLink to='/share'>  <button className=' w-[5rem] text-xs lg:text-base lg:w-[8rem] lg:px-6 py-1 text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg ' type="submit">Share</button> </NavLink>

                                </div>
                            </div>


                        </div>
                        <div className="buttons flex items-center justify-center mt-9  space-x-5 lg:space-y-7 pb-4  lg:hidden block">
                            <button className=' w-[8rem]  lg:w-[8rem]  px-6 py-[0.5rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Edit Profile</button>
                            <NavLink to='/share'>  <button className=' w-[8rem] px-[2.5rem] py-2 text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg ' type="submit">Share</button> </NavLink>

                        </div>
                    </div>

                ))
                : null}


        </div>
    );
}

export default PersonalProfileInfo;
