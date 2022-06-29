import React, { useState, useEffect } from "react";
import { elena } from "../../assets";
import axios from "axios";

function Recommendations(props) {
  const [story, setStory] = useState([]);

  const url = "https://fakerapi.it/api/v1/books?_quantity=9";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div>
      <div className="recommendations mt-[10rem] mx-10 h-full w-[10rem] hidden lg:block ">
        <p className="lg:block hidden">Recommendations </p>

        {story
          ? story.map((story, idx) => (
              <div key={idx} className="story-status grid-cols-2 gap-4 ">
                <div className="image">
                  <img
                    className="mb-2 w-[4rem] h-[4rem] "
                    src={story.image}
                    alt="icon"
                  />
                </div>

                {/* <div>
              <h5 className="text-sm w-14 truncate"> {story.title} </h5>  
            </div> */}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Recommendations;
