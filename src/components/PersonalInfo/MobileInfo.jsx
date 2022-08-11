import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../container/Spinner";
import { personalProfile, reset } from '../../Redux/features/personalProfile/personalProfileSlice'

function MobileInfo() {
  const dispatch = useDispatch()
  const { profile, isLoading, isError, message } = useSelector((state) => state.personalProfile)

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(personalProfile())

    return () => {
      dispatch(reset())
    }
  }, [isError, dispatch, message])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className=" notify flex flex-col mt-10 block lg:hidden  justify-center  sm:items-center lg:items-start sm:w-[100vw] lg:w-[60rem] ">

      {profile ? profile.map((profiles, id) => (
          <div
            key={id}
            className="story-status w-full  bg-white py-4  " >

            <div className="text-[#6a52fd] w-[278px] mx-11 ">Bio</div>

            <div className="flex justify-evenly">
              <div className="flex flex-col ">
                City <span className="text-sm text-[#828282]">{profiles.city.name}</span>
              </div>
              <div className="flex flex-col ">
                Profession
                <span className="text-sm text-[#828282]">Data Analyst </span>
              </div>
              <div className="flex flex-col ">
                Hobby <span className="text-sm text-[#828282]">Singing</span>
              </div>
            </div>

            <div className="flex justify-evenly mt-4">
              <div className="flex flex-col">
                Age <span className="text-sm text-[#828282]">30 </span>
              </div>
              <div className="flex flex-col  ">
                Language
                <span className="text-sm text-[#828282]">English </span>
              </div>
              <div className="flex flex-col mr-[-1.7rem] ">

                <p>
                  Height <span className="text-xs text-[#828282]">(cm)</span>
                </p>
                <span className="text-sm text-[#828282]">140 </span>
              </div>
            </div>

          </div>    ))
        : null}
    </div>
  );
}

export default MobileInfo;
