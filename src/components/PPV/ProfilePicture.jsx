

import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';
import Recommendations from '../Recommendations/Recommendations'
function ProfilePost() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=20";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="feed-recommendation flex mx-6 justify-center lg:justify-start lg:items-start sm:items-center sm:w-[100vw] lg:w-[60rem] ">
    <div className=" w-[66%] pictures">
    {feed
          ? feed.map((feed, idx) => (
              <div key={idx} className="story-status ">
                <div className="image">
                  <img
                    className="w-[17rem] h-[15rem] rounded-md"
                    src={feed.image}
                    alt="icon"
                  />
                </div>
              </div>
            ))
          : null}

    </div>
    <Recommendations />



    </div>
  );
}

export default ProfilePost;
