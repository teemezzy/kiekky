import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Status.css";
import axios from "axios";

const Status = () => {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/books?_quantity=35";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className='lg:w-[968px] m-auto'>
      <div className="status overflow-x-scroll pt-10 mb-8 w-[327px] lg:w-[968px]">
        <div className="flex space-x-5 lg:w-[200vw] w-[800vw] ">

          <p className="flex items-center ">
          <BsArrowLeft color="gray" />
        </p>


          {story
            ? story.map((story, idx) => (
              <div key={idx} className="story-status  ">
                <div className="status-image">
                  <img
                    className="stats w-[4rem] h-[4rem] p-[1.8px] cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
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
      </div>
      );
};

      export default Status;
