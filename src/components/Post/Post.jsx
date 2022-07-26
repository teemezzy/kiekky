import React, { useState, useEffect } from "react";
import { BiCamera, BiVideoPlus } from "react-icons/bi";

import axios from "axios";

function Post() {
  const [display, setDisplay] = useState([]);

  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setDisplay(response.data.data));
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg items-center mb-9 pb-[1px] w-[327px] lg:w-[672px] max-w-Full ">
        <div className="flex items-center">
          <div className="img-container pt-5 pr-5 pl-5">
            {display
              ? display.map((display, idx) => (
                  <div key={idx} className="story-status ">
                    <div className="post-image">
                      <img
                        className=" w-[4rem] h-[4rem]  p-[2.7px]  cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
                        src={display.image}
                        alt="icon"
                      />
                    </div>
                  </div>
                ))
              : null}
          </div>
          <p className="text-[gray] ">Whats new..</p>
        </div>

        <div className="but flex justify-end items-center mr-5 space-x-5 mb-5">
          <p className="text-xl">
            <BiCamera color="gray" />{" "}
          </p>
          <p className="text-xl">
            <BiVideoPlus color="gray" />
          </p>
          <button
            className="flex px-6 py-1 bg-[#6a52fd] text-white rounded-lg "
            type="submit"
          >
            Post it!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post;
