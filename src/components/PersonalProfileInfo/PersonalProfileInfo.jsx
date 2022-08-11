import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { personalProfile, reset } from '../../Redux/features/personalProfile/personalProfileSlice'

function PersonalProfileInfo() {

    const dispatch = useDispatch()
    const { profile, isError, message } = useSelector((state) => state.personalProfile)

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(personalProfile())

        return () => {
            dispatch(reset())
        }
    }, [isError, dispatch, message])

    return (
        <div className=" flex mt-10  w-[326px] lg:w-[984px]  ">
            <div className=" lg:w-[984px] w-[326px] ">
                {profile
                    ? profile.map((profiles, id) => (
                        <div
                            key={id}
                            className="story-status   rounded-xl bg-white "            >

                            <div className="">
                                <div className=" w-[284px] lg:w-[892px] m-auto">
                                    <div className="icons pt-5">
                                        <div className="flex justify-end">

                                            <label htmlFor="small-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle" className="sr-only peer" />
                                                <div className="w-[40px] h-[1.2rem] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#A8A8A8] peer-checked:after:translate-x-[1rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Stealth mode</span>
                                            </label>

                                        </div>
                                    </div>
                                    <div className="pic-not  flex  gap-2 items-start  ">
                                        <div className=" ">

                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                className=" feed-image max-w-[60px] h-[60px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                                                src=''
                                                alt=""
                                            />
                                        </div>

                                        <div className="lg:w-[42rem] mt-[1rem] sm:w-[17rem] md:w-[23rem] ml-5">

                                            <p className="font-[700] text-[24px] ">{profiles.fullname}</p>
                                            <p className="text-[#BDBDBD] text-sm ">@{profiles.username}</p>
                                            <p className="icons text-[#828282] mt-4 mb-5  ">
                                                {profiles.description}
                                            </p>
                                            <div className="buttons mt-9 text-sm space-x-5 space-y-7 pb-4  hidden lg:block">
                                                <NavLink to='/edit_profile'> <button className=' w-[8rem] text-sm  lg:w-[8rem] px-2 lg:px-6 py-[0.6rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Edit Profile</button> </NavLink>
                                                <NavLink to='/share'>  <button className=' w-[5rem] text-sm lg:text-base lg:w-[8rem] lg:px-6 py-[7px] text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg ' type="submit">Share</button> </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons flex items-center justify-center  py-[2rem] space-x-5 lg:space-y-7   lg:hidden block">
                                        <NavLink to='/edit_profile'>  <button className=' w-[130px] h-[42px] bg-[#6a52fd] text-white rounded-lg ' type="submit">Edit Profile</button> </NavLink>
                                        <NavLink to='/share'>  <button className=' w-[130px] h-[42px] text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg ' type="submit">Share</button> </NavLink>
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
