import React from "react";
import {useSelector} from "react-redux"
import { selectCurrentUser, selectCurrentToken} from "../features/auth/authSlice"
import {Link, Outlet } from "react-router-dom";
import {BiCamera, BiVideoPlus} from  "react-icons/bi";
import {BsBell, BsArrowLeft, BsArrowRight} from  "react-icons/bs";
import Profile from "../assets"
import {PostImg }from '../assets'
import {val, elena} from '../assets';
import {loLocationOutline} from  "react-icons/io5";
import { Logo } from '../assets'
 

const Home = () => {
  // const user = useSelector(selectCurrentUser);
  // const token = useSelector(selectCurrentToken);

  // const welcome = user ? `Hi ${user}!` : " Welcome!";
  // const tokenAbbr = `${token.slice(0, 9)}...`

  return (
    <div>
      
    <div className="nav-home flex justify-between items-center p-7 bg-white">

      <img src={Logo} alt="" />
    <p><BsBell color="gray"/> </p>

    </div>
    <div className="post-recommendation  flex justify-center                                    ">
    <div className="post-area ">
<div className="home-post items-center  ">
<div className="status flex justify-center bg-white  mb-8  ">
<p className="flex items-end"><BsArrowLeft color="gray"/> </p>


<div className="items-center mx-5">
<img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div>
<div  className='mx-5'>
<img className=' mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Valerie</p>
</div>
<div className='mx-5' >
<img  className=' mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div>
<div className='mx-5' >
<img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div>

<p className="flex items-end"> <BsArrowRight color="gray" /> </p>


</div > 

<div className="post_box justify-center rounded-lg border-2 items-center mb-9 ">
<div className="username flex items-center">
    <div className="img-container p-5">
    <img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
    </div>
    <p className='text-[gray] '>Whats new..</p>
  </div>
  
  <div className="but flex justify-end items-center mr-5 my-5">
  <p className='mx-1'><BiCamera color="gray"/>  </p>
 <p className='mx-1'> <BiVideoPlus color="gray"/> </p> 
<button className='mx-1 flex px-6 py-1 bg-[#6a52fd] text-white rounded-lg '  type="submit">Post it!</button>
  </div>

</div>

<div className="border-2 rounded-lg "> 
<div className="postItem  items-center mb-7 ">
  <div className="username flex items-center mx-5 ">
    <div className="img-container">
    <img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
    </div>

<div className="text  mx-2">
<p className='font-[700]'>Elena</p>
<div className="location flex  text-gray text-sm ">
<p className=''> 
    <span className="loc"> <loLocationOutline color="gray"/> </span> 
    Lagos, Nigeria </p>
    {/* <p className="text-[gray]  ">2days ago</p> */}
</div>
   
</div>
    
  </div>

<div className="caption pt-5 mx-5">
<p>I love how i look in this top.</p></div>
</div>

<div className="post-img h-[10rem] w- [10rem] md:h-[10rem] md:w-[10rem] flex  mx-5">
  <img className='mr-5' src={PostImg} alt="" />
  <img src={PostImg} alt="" />
  </div> 
</div>
  </div>
  </div>

<div className="recommendations mt-[20rem] mx-10 flex h-full w-[7rem] hidden lg:block">
  <p>Recommendations </p>
  <img className='h-[10rem] w-[10rem] mb-5' src={elena}  alt="" />
  <img className='h-[10rem] w-[10rem]' src={elena}alt="" />
</div>
    
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
