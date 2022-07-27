import React, { useState, useEffect } from "react";
// import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";

function NotificationComp() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=50";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className=" notify flex flex-col mt-6 lg:mt-0 divide-y  divide-slate-200 lg:w-[872px] w-[327px] m-auto ">

      <p className='px-5 pb-5 hidden lg:block '>Notification</p>
      {feed
        ? feed.map((feed, idx) => (
          <div
            key={idx}
            className="story-status not w-full px-4 bg-white py-6  "            >

            <div className="pic-not flex gap-2 items-center  ">
              <div className="feed-image">
                <img

                  className=" max-w-[4rem] h-[4rem] p-[2.7px] rounded-[50%]"
                  src={feed.image}
                  alt="icon"
                />
              </div>

              <div className="text-content">
                <p className="mb-3 text-sm" >You have recieved a welcome gift of 100 Token</p>
                <p className="text-sm text-[gray]">{feed.birthday}, 10am</p>
                <p> </p>
              </div>
            </div>
          </div>

        ))
        : null}
    </div>
  );
}

export default NotificationComp;
