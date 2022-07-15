

import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Recommendations from '../Recommendations/Recommendations'
function ProfilePost() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=20";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="feed-recommendation flex  justify-center lg:justify-start lg:items-start sm:items-center sm:w-[100vw] lg:w-[px] m-auto ">
      <div className=" bg-white lg:p-10 mx-6 mb-[5rem]  pictures">
        {feed
          ? feed.map((feed, idx) => (
            <div key={idx} className="story-status ">
              <div className="image">
                <img
                  className=" w-[17rem] h-[7rem] lg:h-[16rem] rounded-md"
                  src={feed.image}
                  alt="icon"
                />
              </div>
            </div>
          ))
          : null}

        {/* <button className=" block w-[rem] border-[1px] border-[#6a52fd] lg:hidden"> View More</button> */}

      </div>
      <div className="div lg:ml-[-7rem]">
        <Recommendations /></div>



    </div>
  );
}

export default ProfilePost;
