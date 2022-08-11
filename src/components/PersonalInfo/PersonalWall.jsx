

import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../container/Spinner";
import {personalProfile, reset } from '../../Redux/features/personalProfile/personalProfileSlice'
import Info from './Info'
import Post from '../Post/Post'

function PersonalWall() {
  const dispatch = useDispatch()
  const {profile, isLoading, isError, message } = useSelector((state)=> state.personalProfile)

  useEffect(() => {
    if(isError){
      toast.error(message);
    }
    // dispatch(personalProfile())

    return () => {
      dispatch(reset())
    }
  }, [isError, dispatch, message])
  console.log(profile[0].posts);

if (isLoading) {
  return <Spinner />
}



  return (
    <div className=" lg:w-[984px] w-[327px] mb-[6rem] flex ">
      {/* <Info /> */}
      <div>
      {/* <Post /> */}
      {
      

      (profile[0].posts)
        ? (profile[0].posts).map((profiles, id) => (
          <div
            key={id}
            className="bg-white py:-[17px] lg:py-[30px] w-[327px] rounded-lg mb-5 lg:w-[672px] lg:h-[625px]  "
          >
            <div>
              <div className=" lg:w-[586px] w-[294px] m-auto ">
                <div className=" flex  space-x-[18px] lg:space-x-[12px] items-center  ">
                  <div className="">
                      <img

                        className=" profile-image max-w-[50px] h-[50px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                        src=''
                        alt="icon"
                      />
                   
                  </div>

                  <div className="  w-[17rem] md:w-[23rem] lg:w-[506.67px]">
                    

                      <p className="font-[700] ">{profiles.user.username}</p>
                    

                    <div className="location flex justify-between lg:w-[506.67px] text-gray text-sm ">
                      <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-center">
                        <span>
                          <MdOutlineLocationOn color="gray" />
                        </span>
                        {profiles.user.country.name},
                        {profiles.user.city.name}
                       
                      </p>
                      <div className="text-[gray] hidden lg:block text-sm w-24">
                            {new Date(profiles.created_at).toLocaleString("en-us", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              second: "numeric",
                              hour12: true,
                             
                            })}
                          </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" m-auto py-[1rem] w-[294px]  lg:w-[586px]">
                  <p>{profiles.body}.</p>
                </div>

                <div className=" m-auto md:h-[450px] w-[300px] lg:w-[586px] ">
                    <img
                      loading="lazy"
                      decoding="async"
                      className=" w-[290px] h-[290px]  lg:w-[586px] lg:h-[430px] rounded-lg"
                      src={profiles.images.url}
                      alt=""
                    />
                  </div>
            </div>
          </div>
        ))
        : null}
    </div>
    </div>
  );
}

export default PersonalWall;
