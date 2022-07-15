import React, { useEffect, useState } from 'react';
import axios from 'axios'

function HotPicks(props) {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/books?_quantity=7";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className=' w-[90vw] lg:w-[64rem] m-auto '>
      <div className="top-text flex justify-between   ">
        <div className="sub flex items-center">
          <p>Hot Picks</p>
          <p className='bg-[#F6F4FF] text-xs text-[#999999] px-3 py-1 rounded-md '>Gender :Female</p>
        </div>
        <p className="view text-sm text-[#6a52fd] ">View all <span> {`${'>>'}`}</span></p>
      </div>

      <div className=" ">
        <div className="images lg:w-[111.5%]  lg:w-[65rem] ">
        <div className="scale flex w-[90%] overflow-x-scroll space-x-5 mt-5 ">

          {story
            ? story.map((story, idx) => (
              <div key={idx} className="story-status object-cover ">
                <div className=" ">
                  <img
                    className="stats mb-2 w-min-full lg:w-[9.5rem] lg:h-[8rem] rounded-lg  "
                    src={story.image}
                    alt="icon"
                  />
                </div>
                <div>
                  <h5 className="text-sm text-[white] w-14 truncate"> {story.title} </h5>
                </div>
              </div>
            ))
            : null}
        </div>
      </div>
      </div>
    </div>
  );
}

export default HotPicks;