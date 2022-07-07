import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { BiCamera, BiVideoPlus } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import SubscribeModal from "./SubscribeModal";

function User() {
  const [feed, setFeed] = useState([]);
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = ()=> setShowMyModal(false)
  const url = "https://fakerapi.it/api/v1/persons?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className=" notify flex flex-col mt-10  mx-6 justify-center border-2 sm:items-center lg:items-start sm:w-[60rem] lg:w-[60rem] ">
      {feed
        ? feed.map((feed, idx) => (
          <div
            key={idx}
            className="story-status w-full  px-4 border-2 bg-white py-4  "
          >
            <div className="display-section ">
              <p className=" ">
                {" "}
                <NavLink to="/user_profile">
                  <BsArrowLeft color="gray" />{" "}
                </NavLink>
              </p>
              <div className=" pic-not mt-4 flex flex-col justify-center items-center m-auto pt-4  ">
                <div className="">
                  <img
                    className=" w-[6rem]  h-[6rem] p-[2.7px] rounded-[50%]"
                    src={feed.image}
                    alt="profileImage"
                  />
                </div>

                <div className="w-full flex flex-col  justify-center items-center p-5 mx-5 border-b-[1px] border-gray-200">
                  <p className="font-[700]">{feed.firstname}</p>

                  <div className="location text-gray text-sm ">
                    <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-start">
                      <span>
                        <MdOutlineLocationOn color="gray" />
                      </span>
                      {feed.address.country},{feed.address.city}
                      {/* Lagos, Nigeria */}
                    </p>
                  </div>
                </div>
                <p className="mt-7 ">Select a plan and subscribe.</p>
                <div className="subs  lg:w-[95%] mt-7 flex lg:flex-row flex-col  lg:h-[20rem]  lg:space-y-0 space-y-5  lg:space-x-5">
                  <div className="subs-plan p-5  w-[13rem] h-[18.5rem] space-y-3 bg-[#F6F4FF] rounded-xl ">
                    <h1 className="text-[#6a52fd] text-2xl mb-4 font-bold">
                      100 Tokens
                    </h1>
                    <p className="text-[#828282] "> 1 month</p>

                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span> View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all videos</span>{" "}
                    </p>

                    <NavLink to="/subscribe">
                      {" "}
                      <button
                        className=" mt-6 w-[5rem] text-xs lg:text-sm lg:w-[9.5rem] lg:px-6 py-2 bg-[#6a52fd] text-white rounded-lg "
                        type="submit"
                      >
                        Choose{" "}
                      </button>{" "}
                    </NavLink>
                  </div>

                  <div className="subs-plan p-5 w-[12.5rem] h-[18.5rem] space-y-3 bg-[#F6F4FF] rounded-xl ">
                    <h1 className="text-[#6a52fd] text-2xl mb-4 font-bold">
                      100 Tokens
                    </h1>
                    <p className="text-[#828282] "> 3 month</p>

                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span> View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all videos</span>{" "}
                    </p>

                    <NavLink to="/subscribe">
                      {" "}
                      <button
                        className=" mt-6 w-[5rem] text-xs lg:text-sm lg:w-[9.5rem] lg:px-6 py-2 bg-[#6a52fd] text-white rounded-lg "
                        type="submit"
                      >
                        Choose{" "}
                      </button>{" "}
                    </NavLink>
                  </div>

                  <div className="subs-plan p-5 w-[12.5rem] h-[18.5rem] space-y-3 bg-[#F6F4FF] rounded-xl ">
                    <h1 className="text-[#6a52fd] text-2xl mb-4 font-bold ">
                      100 Tokens
                    </h1>
                    <p className="text-[#828282] "> 6 month</p>

                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span> View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all videos</span>{" "}
                    </p>

                    <NavLink to="/subscribe">
                      {" "}
                      <button
                        className=" mt-6 w-[5rem] text-xs lg:text-sm lg:w-[9.5rem] lg:px-6 py-2 bg-[#6a52fd] text-white rounded-lg "
                        type="submit"
                      >
                        Choose
                      </button>{" "}
                    </NavLink>
                  </div>

                  <div className="subs-plan p-5 w-[12.5rem] h-[18.5rem] space-y-3 bg-[#F6F4FF] rounded-xl ">
                    <h1 className="text-[#6a52fd] text-2xl mb-4 font-bold">
                      100 Tokens
                    </h1>
                    <p className="text-[#828282] "> 12 month</p>

                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span> View all photos</span>{" "}
                    </p>
                    <p className="text-[#828282] space-x-2 flex text-sm">
                      {" "}
                      <span className="text-[#6a52fd] ">
                        {" "}
                        <TiTick />
                      </span>{" "}
                      <span>View all videos</span>{" "}
                    </p>

                    <NavLink to="/subscribe">
                      {" "}
                      <button onClick={() => setShowMyModal(true)}
                        className=" mt-6 w-[5rem] text-xs lg:text-sm lg:w-[9.5rem] lg:px-6 py-2 bg-[#6a52fd] text-white rounded-lg "
                        type="submit"
                      >
                        Choose{" "}
                      </button>{" "}
                    </NavLink>
                  </div>
                </div>
              </div>

            </div>

          </div>
        ))
        : null}
      <SubscribeModal onClose={ handleOnClose } visible={showMyModal} />
    </div>
  );
}

export default User;
