import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Status.css";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import StatusSkeleton from "./StatusSkeleton";

const Status = () => {
  const [story, setStory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://fakerapi.it/api/v1/books?_quantity=35";

  useEffect(() => {
    axios.get(url).then((response) => {
      setStory(response.data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="lg:w-[1050px] m-auto max-w-full mb-8">
      <SimpleBar style={{ width: "800wv" }}>
        <div className="status pt-10 w-[327px] mb-2 lg:w-[1050px]">
          <div className="flex space-x-5 lg:w-[250vw] w-[800vw]">
            {isLoading && <StatusSkeleton className="flex" cards={10} />}
            <p className="flex items-center ">
              <BsArrowLeft color="gray" />
            </p>
            {story
              ? story.map((story, idx) => (
                  <div key={idx} className="story-status">
                    <div className="status-image">
                      <img
                        className="stats w-[4rem] h-[4rem] p-[1.8px] cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
                        src={story.image}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm mt-1 w-14 truncate">
                        {" "}
                        {story.title}{" "}
                      </h5>
                    </div>
                  </div>
                ))
              : null}
            <p className="flex items-center">
              <BsArrowRight color="#FF60C8" />
            </p>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Status;
