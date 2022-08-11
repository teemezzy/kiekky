import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { personalProfile, reset } from '../../Redux/features/personalProfile/personalProfileSlice'


function Info() {
  const dispatch = useDispatch();
  const { user, isSuccess, isLoading, message} = useSelector((state) => state.auth);
  const { profile, isError } = useSelector((state) => state.personalProfile)

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
    <div className=" notify flex flex-col justify-center  h-[14rem] bg-white sm:items-center lg:w-[984px] w-[352px]  ">
    
      {profile
        ? profile.map((profiles, id) => (
            <div
              key={id}
              className="inner-content w-[20.5rem] md:w-[40rem] m-auto text-sm rounded-xl px-5 bg-white border-2 py-4 space-y-5"
            >
              <div className="flex justify-evenly">
                <div className="flex flex-col ">
                  City <span className="text-sm text-[#828282]"> {profiles.city.name} </span>
                </div>
                <div className="flex flex-col ">
                  Profession
                  <span className="text-sm text-[#828282]"> Developer </span>
                </div>
                <div className="flex flex-col ">
                  Hobby <span className="text-sm text-[#828282]">Dancing </span>
                </div>
              </div>

              <div className="flex justify-evenly ">
                <div className="flex flex-col">
                  Age <span className="text-sm text-[#828282]">Lagos </span>
                </div>
                <div className="flex flex-col  ">
                  Language
                  <span className="text-sm text-[#828282]">Yoruba </span>
                </div>
                <div className="flex flex-col mr-[-1.7rem] ">
                  <div>
                    Height <span className="text-xs text-[#828282]">(cm)</span>
                  </div>
                  <span className="text-sm text-[#828282]">140 </span>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Info;
