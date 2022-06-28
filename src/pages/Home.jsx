import React from "react";
import {useSelector} from "react-redux"
import {Link, Outlet } from "react-router-dom";
import {loLocationOutline} from  "react-icons/io5";
import {Status, Post, Feeds, Recommendations} from "../components";
import { Sidebar } from "../components";
import { Logo } from '../assets'
import {BsBell, BsSearch,} from  "react-icons/bs";
import './Home.css'

const Home = () => {
  return (
<div className="home">
    {/* <div className="nav-home flex justify-between items-center p-7 bg-white">

<img src={Logo} alt="" />

<div className="search flex  items-center space-x-10">
<div className="relative flex hidden lg:block items-center ">
  <div className="absolute">
    <BsSearch className="h-5 w-5 pl-1 text-gray-500" />
  </div>
  <input className="bg-gray-50 p-2 block w-full pl-10 sm:text-sm focus:border-[gray]" type="text" name="" placeholder="Search" />
</div>

<p><BsBell color="gray"/> </p>



</div>

</div> */}
<div className='side-home flex bg-[#E5E5E5]'>

    <div className=" fixed h-[100%] hidden lg:block sidebar_prt pt-8">
            <Sidebar />
            </div>

    <div className=" lg:ml-[24rem] " >
      
      <Status />
    <div className="ml-post-recommendation flex justify-center lg:justify-start                                   ">
    <div className="post-area md:w-[30rem] lg:w-[40rem] px-5 ">
<div className="home-post ">


<Post />

<Feeds />

  </div>
  </div>

<Recommendations />
    
    </div>
{/*     
       <div>
        
         <h1>{welcome}</h1> 
        <p>Token: {tokenAbbr}</p>
        
        <p><Link to="/userslist">Go to the Users List</Link></p>
      </div> */}
    </div>
    </div>
    </div>
  );
};

export default Home;
