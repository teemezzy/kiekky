import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Members.css'

function HotPicks(props) {
    const [story, setStory] = useState([]);
    const url = "https://fakerapi.it/api/v1/persons?_quantity=40";
  
    useEffect(() => {
      axios.get(url).then((response) => setStory(response.data.data));
    }, []);

    return (
        <div className=' mt-[6rem] w-[60rem]'>
            <div className="sub flex  space-x-3 items-center">
            <p>Members</p>
<p className='bg-[#F6F4FF] text-xs text-[#999999] px-3 py-1 rounded-md '>Gender :Female</p>
            </div>

            <div className="members images  mt-5">

{story
          ? story.map((story, idx) => (
              <div key={idx} className="members-feed ">
                <div className="">
                  <img
                    className="stats mb-2 w-[14rem] h-[8rem] px-5   rounded-md  "
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