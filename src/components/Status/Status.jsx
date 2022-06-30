import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Status.css";
import axios from "axios";

const Status = () => {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/books?_quantity=3";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div>
      <div className="status flex space-x-8  overflow-x-scroll  px-4 pt-10 mb-8  ">
        <p className="flex items-center ">
          <BsArrowLeft color="gray" />
        </p>
        {story
          ? story.map((story, idx) => (
              <div key={idx} className="story-status ">
                <div className="status-image">
                  <img
                    className="stats w-[4rem] h-[4rem] p-[2.7px] cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
                    src={story.image}
                    alt="icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm w-14 truncate"> {story.title} </h5>
                </div>
              </div>
            ))
          : null}
        <p className="flex items-center">
          <BsArrowRight
            color="#FF60C8"
          />
        </p>
      </div>
    </div>
  );
};

export default Status;
