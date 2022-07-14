
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Recommendations.css'

function Recommendations(props) {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/books?_quantity=50";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div>
      <p className="lg:block hidden ml-[10rem] ">Recommendations </p>
      <div className="recommendations hidden mt-[2rem]  w-[268px] lg:block ml-[10rem]">
        {story
          ? story.map((story, idx) => (
              <div key={idx} className="story-status ">
                <div className="image">
                  <img
                    className="w-[8rem] h-[8rem] rounded-md"
                    src={story.image}
                    alt="icon"
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
export default Recommendations;
