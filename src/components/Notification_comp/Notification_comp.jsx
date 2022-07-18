import React, { useState, useEffect } from "react";
// import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";

function Notification_comp() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=50";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className=" notify flex flex-col mt-10 divide-y  divide-slate-200 mx-6  justify-center  sm:items-center lg:items-start sm:w-[100vw] lg:w-[50rem] ">
      <p className="p-5 ">Notification</p>
      {feed
        ? feed.map((feed, idx) => (
            <div
              key={idx}
              className="story-status not w-full px-4 bg-white py-6  "
            >
              <div className="pic-not flex gap-2 items-center  ">
                <div className="feed-image">
                  <img
                    className=" w-[4rem] h-[4rem] p-[2.7px] rounded-[50%]"
                    src={feed.image}
                    alt="icon"
                  />
                </div>

                <div className="text-content">
                  <p className="mb-3 text-sm">
                    You have recieved a welcome gift of 100 Token
                  </p>
                  <p className="text-sm text-[gray]">{feed.birthday}, 10am</p>
                  
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Notification_comp;
