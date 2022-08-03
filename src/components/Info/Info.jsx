import React, { useState, useEffect } from "react";
import axios from "axios";

function Info() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className=" notify flex flex-col justify-center  h-[14rem] bg-white sm:items-center lg:w-[984px] w-[352px]  ">
    
      {feed
        ? feed.map((feed, idx) => (
            <div
              key={idx}
              className="inner-content w-[20.5rem] md:w-[40rem] m-auto text-sm rounded-xl px-5 bg-white border-2 py-4 space-y-5"
            >
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
                  Language
                  <span className="text-sm text-[#828282]">Lagos </span>
                </p>
                <p className="flex flex-col mr-[-1.7rem] ">
                  <div>
                    Height <span className="text-xs text-[#828282]">(cm)</span>
                  </div>
                  <span className="text-sm text-[#828282]">Lagos </span>
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Info;
