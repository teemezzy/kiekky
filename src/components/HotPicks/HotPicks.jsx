import React, {useEffect, useState} from 'react';
import axios from 'axios'

function HotPicks(props) {
    const [story, setStory] = useState([]);
    const url = "https://fakerapi.it/api/v1/books?_quantity=6";
  
    useEffect(() => {
      axios.get(url).then((response) => setStory(response.data.data));
    }, []);

    return (
        <div className=' w-[70rem]'>
            <div className="sub flex  space-x-3 items-center">
            <p>Hot Picks</p>
<p className='bg-[#F6F4FF] text-xs text-[#999999] px-3 py-1 rounded-md '>Gender :Female</p>
            </div>

            <div className="images flex mt-5">

{story
          ? story.map((story, idx) => (
              <div key={idx} className="story-status ">
                <div className="">
                  <img
                    className="stats mb-2 w-[9.5rem] h-[8rem] px-5   rounded-md  "
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