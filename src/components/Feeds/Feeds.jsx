import React, { useState, useEffect } from "react";
// import { PostImg } from "../../assets";
// import { val, elena } from "../../assets";
import axios from "axios";

function Feeds() {
  const [feed, setFeed] = useState([]);

  const url = 'https://fakerapi.it/api/v1/persons?_quantity=10';
    useEffect(() => {
      axios.get(url)
      .then((response) => 
      setFeed(response.data.data));
    }, []);
    
 return (
          <div className=" "> 
{feed ? feed.map((feed, idx )=> (
          <div key={idx} className='story-status border-2 bg-white py-4 rounded-lg mb-5'>
            <div>
<div className="postItem  items-center mb-7 ">
  <div className="username flex items-center mx-5 ">
    <div className="img-container">
    <img className='mb-2 w-[4rem] h-[4rem]  p-[1.5px] border-[#6a52fd] border-2 rounded-[50%]' src={feed.image} alt="icon" />
 
    </div>

<div className="text  mx-2">
<p className='font-[700]'>{feed.firstname}</p>
<div className="location flex space-x-24 md:space-x-[17rem] text-gray text-sm ">
<p className='text-sm'> 
    {/* <span className="loc"> <loLocationOutline color="gray"/> </span>  */}
   {feed.address.country} ,{feed.address.city}</p>
    <p className="text-[gray] hidden lg:block text-sm ">2 days ago</p>
</div>
   
</div>
    
  </div>

<div className="caption pt-5 mx-5">
<p>{feed.email}.</p></div>
</div>

<div className="post-img h-[9rem] md:h-[10rem] flex  mx-5">
  <img className='mr-5 w-[9rem] lg:w-[16rem]' src={feed.image} alt="" />
  <img className=' w-[9rem] lg:w-[16rem]' src={feed.image} alt="" />
  </div> 
</div>
  
        </div>
        ) )
        : null
      }

  </div>
    );
}

export default Feeds;
