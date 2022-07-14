import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom'



function MobileInfo() {
    const [feed, setFeed] = useState([]);

    const url = "https://fakerapi.it/api/v1/books?_quantity=1";

    useEffect(() => {
        axios.get(url).then((response) => setFeed(response.data.data));
    }, []);

    return (
        <div className=" notify flex flex-col mt-10 block lg:hidden mx-6  justify-center  sm:items-center lg:items-start sm:w-[100vw] lg:w-[60rem] ">

            {feed
                ? feed.map((feed, idx) => (
                    <div
                        key={idx}
                        className="story-status w-full px-4 bg-white py-4  "            >

<p className="text-[#6a52fd] ">Bio</p>

<div className="flex justify-evenly">
                <p className="flex flex-col ">
                  City <span className="text-sm text-[#828282]">Lagos </span>
                </p>
                <p className="flex flex-col ">
                  Profession
                  <span className="text-sm text-[#828282]">Lagos </span>
                </p>
                <p className="flex flex-col ">
                  Hobby <span className="text-sm text-[#828282]">Lagos </span>
                </p>
              </div>

              <div className="flex justify-evenly ">
                <p className="flex flex-col">
                  Age <span className="text-sm text-[#828282]">Lagos </span>
                </p>
                <p className="flex flex-col  ">
                  Language{" "}
                  <span className="text-sm text-[#828282]">Lagos </span>{" "}
                </p>
                <p className="flex flex-col mr-[-1.7rem] ">
                  {" "}
                  <p>
                    Height <span className="text-xs text-[#828282]">(cm)</span>{" "}
                  </p>{" "}
                  <span className="text-sm text-[#828282]">Lagos </span>{" "}
                </p>
              </div>
                       
                    </div>

                ))
                : null}


        </div>
    );
}

export default MobileInfo;
