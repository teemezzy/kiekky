import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Members.css'
import {BsBell, BsFilter} from  "react-icons/bs";


function HotPicks(props) {
    const [story, setStory] = useState([]);
    const url = "https://fakerapi.it/api/v1/persons?_quantity=40";
  
    useEffect(() => {
      axios.get(url).then((response) => setStory(response.data.data));
    }, []);

    return (
        <div className=' mt-[2.5rem] lg:w-[60rem]'>
          <div className="top-text flex justify-between">

         
            <div className="sub flex px-4 space-x-3 items-center">
            <p>Members</p>
<p className='bg-[#F6F4FF] text-xs text-[#999999] px-3 py-1 rounded-md '>Gender :Female</p>
            </div>
            <div className="flex relative pr-9 mb-3 justify-between space-x-6 items-center">
           
           <input className=" p-2 block w-full pl-12 sm:text-sm focus:outline-none border-2 rounded-lg focus:border-[gray]" type="text" name="" placeholder="Sort by : Location" />
           <div className="absolute h-[100%] flex items-center  ">
                 <BsFilter className="h-5 w-5  text-white bg-[#6f52ad]" />
                 </div> </div>


</div>
<div className="members images  mt-2">

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