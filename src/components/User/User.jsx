import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { BiCamera } from "react-icons/bi";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import OpenChat from './OpenChat'
import Block from './Block'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../container/Spinner";
import { userProfile, reset } from '../../Redux/features/userProfile/userProfileSlice'

function User() {
  const dispatch = useDispatch()
  const { profileUser, isError, message } = useSelector((state) => state.userProfile)

 

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  const [showMyBlock, setShowMyBlock] = useState(false);
  const handleOnCloseBlock = () => setShowMyBlock(false);

  useEffect(() => {
    if (isError) {
        toast.error(message);
    }
    dispatch(userProfile())

    return () => {
        dispatch(reset())
    }
}, [isError, dispatch, message])



 

  return (
    <div className=" mt-10   lg:w-[984px] w-[352px] h-[246px]  ">

      {profileUser.map((profile, idx) => (
          <div
            key={idx}
            className="relative px-[18px] lg:px-[64px] bg-white py-4 lg:w-[984px] w-[352px] "    >

            <div className="icons flex justify-between">
              <p className="flex items-center ">
                <NavLink to='/home'>
                  <BsArrowLeft color="gray" /> </NavLink>
              </p>
              <span onClick={() => setShowMyBlock(true)}>  <BsThreeDotsVertical color="gray" /> </span>

            </div>


            <div className="pic-not mt-4 flex gap-2 items-start pt-4  ">
              <div className="">
                <img
                  className=" feed-image max-w-[50px] h-[50px] lg:max-w-[100px] lg:h-[100px] p-[2.7px] rounded-[50%]"
                  src=''
                  alt="dp"
                />
              </div>

              <div className="lg:w-[42rem] w-[17rem]  lg:pt-[1rem] ml-[15px] md:w-[23rem]">

                <p className="font-[700]">{profile.username}</p>

                <div className="location flex justify-between  pr-5 text-gray text-sm ">
                  <p className="md:text-[13px] sm:text-[0.4rem] text-[#BDBDBD] font-[100] flex items-center">
                    <span>
                      <MdOutlineLocationOn color="" />
                    </span>
                    {profile.country.name},
                    {profile.city.name}
                    {/* Lagos, Nigeria */}
                  </p>

                </div>
                <div className="icons flex  space-x-3 mt-4">
                  <p className='text-sm text-[#828282] '><BiCamera color="" /> </p> <span className='text-xs text-[#828282] '>4</span>
                  <p className='text-sm text-[#828282] '> <FiVideo color="" /></p> <span className='text-xs text-[#828282]'>2</span>
                </div>

                <div className="buttons mt-6 text-sm space-x-5 space-y-7  pb-4 hidden lg:block">
                  <button onClick={() => setShowMyModal(true)} className=' w-[8rem] text-xs lg:text-base lg:w-[8rem] px-2 lg:px-6 py-[0.4rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Open Chat</button>
                  <NavLink to='/subscribe'>  <button className=' w-[5rem] text-xs lg:text-base lg:w-[8rem] lg:px-6 py-1 text-[#6a52fd] border-[1px] border-[#6a52fd] text-white rounded-lg ' type="submit">Subscribe</button> </NavLink>
                </div>
              </div>
              <div className="buttons flex   py-[2rem] space-x-5 lg:space-y-7   hidden ">
                <button
                  onClick={() => setShowMyModal(true)}
                  className=" w-[8rem] text-[14px] lg:w-[8rem] px-2 py-[0.4rem] bg-[#6a52fd] text-white rounded-lg "
                  type="submit"
                >
                  Open Chat
                </button>

                <NavLink to="/subscribe">
                  {" "}
                  <button
                    className="  text-[14px] lg:w-[8rem] w-[130px] py-[7px] text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg "
                    type="submit"
                  >
                    Subscribe
                  </button>{" "}
                </NavLink>
              </div>
            </div>
            <div className="buttons flex   py-[2rem] space-x-5 lg:space-y-7   lg:hidden block">
              <button onClick={() => setShowMyModal(true)} className=' w-[8rem] text-[14px] lg:w-[8rem] px-2 py-[0.4rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Open Chat</button>

              <NavLink to='/subscribe'>  <button className='  text-[14px] lg:w-[8rem] w-[130px] py-[7px] text-[#6a52fd] border-[1px] border-[#6a52fd] rounded-lg ' type="submit">Subscribe</button> </NavLink>
            </div>
          </div>

        ))
       }

      <OpenChat onClose={handleOnClose} visible={showMyModal} />
      <Block visibleBlock={showMyBlock} onCloseBlock={handleOnCloseBlock} />


    </div>
  );
}

export default User;
