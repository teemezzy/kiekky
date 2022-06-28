import React from "react";
import {useSelector} from "react-redux"
import { selectCurrentUser, selectCurrentToken} from "../features/auth/authSlice"
import {Link, Outlet } from "react-router-dom";
import {BsBell, BsArrowLeft, BsArrowRight} from  "react-icons/bs";
import Profile from "../assets"
import {PostImg }from '../assets'
import {val, elena} from '../assets';
import {loLocationOutline} from  "react-icons/io5";
import {Status, Post, Feeds, Recommendations} from "../components";


 

const Home = () => {
  // const user = useSelector(selectCurrentUser);
  // const token = useSelector(selectCurrentToken);

  // const welcome = user ? `Hi ${user}!` : " Welcome!";
  // const tokenAbbr = `${token.slice(0, 9)}...`

  return (
    <div className=" " >
      
      <Status />
    <div className="post-recommendation flex justify-center md:justify-start                                   ">
    <div className="post-area md:w-[30rem] lg:w-[40rem] px-5 ">
<div className="home-post ">


<Post />

<Feeds />

  </div>
  </div>

<Recommendations />
    
    </div>
    
       {/* <div> */}
        
        {/* <h1>{welcome}</h1>
        <p>Token: {tokenAbbr}</p>
        
        <p><Link to="/userslist">Go to the Users List</Link></p>
      </div>
      <Outlet /> */}
    </div>
  );
};

export default Home;
