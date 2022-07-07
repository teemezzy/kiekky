import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import {Sidebar, UserNav, Subscribe} from '../components'




function UserSubscribe(props) {
const [feed, setFeed] = useState([])

const url = "https://fakerapi.it/api/v1/persons?_quantity=1";

useEffect(() => {
 axios.get(url).then((response) => setFeed(response.data.data))

}, [])

    return (
       <div className="notifications bg-[#F9FAFA]"> 
        <UserNav />
         <div className="flex mt-[6rem] bg-[#F9FAFA] ">

<div className="  fixed h-[100%] hidden lg:block sidebar_prt pt-8">
    <Sidebar />
    </div>
<div className='lg:ml-[20rem] lg:w-[60rem] '>
<Subscribe />
</div>
</div>
        </div>
    );
}

export default UserSubscribe;

{/* <div className='mx-6  justify-center  sm:items-center lg:items-start sm:w-[100vw] lg:w-[60rem]'>
        
              
              
<p className="flex items-center ">
<BsArrowLeft color="gray" />
</p>
<div className="feed-image">
<img
className=" w-[4rem] h-[4rem] p-[2.7px] rounded-[50%]"
src={feed.image}
alt="icon"
/>
</div>

<div className="lg:w-[42rem] sm:w-[17rem] md:w-[23rem]">
     
     <p className="font-[700]">{feed.firstname}</p>

      <div className="location flex justify-between  pr-5 text-gray text-sm ">
        <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-start">
          <span>
            <MdOutlineLocationOn color="gray" />
          </span>
          {/* {feed.address.country},
           {feed.address.city} */}
          {/* Lagos, Nigeria */}
//         </p>

//       </div>
//       </div>

// </div> */}