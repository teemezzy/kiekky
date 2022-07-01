import React, {useEffect, useState} from 'react';
import axios from 'axios'

function HotPicks(props) {
    const [story, setStory] = useState([]);
    const url = "https://fakerapi.it/api/v1/books?_quantity=4";
  
    useEffect(() => {
      axios.get(url).then((response) => setStory(response.data.data));
    }, []);

    return (
        <div className='  '>
          <div className="top-text flex justify-between">
            <div className="sub flex px-3 items-center">
            <p>Hot Picks</p>
<p className='bg-[#F6F4FF] text-xs text-[#999999] px-3 py-1 rounded-md '>Gender :Female</p>
            </div>
            <p className="view text-sm text-[#6f52ad]">View all <span> {`${'>>'}`}</span></p>
            </div>
            <div className="images  flex px-3  lg:w-[60rem]  space-x-5 mt-5">

{story
          ? story.map((story, idx) => (
              <div key={idx} className="story-status  ">
                <div className=" space-x-4   ">
                  <img
                    className="stats mb-2 w-[9.5rem] h-[8rem] rounded-lg  "
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
</div>

        </div>
    );
}

export default HotPicks;