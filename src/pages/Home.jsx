import React from "react";
// import { useSelector } from "react-redux";
// import { selectCurrentUser, selectCurrentToken} from "../features/auth/authSlice"
// import { BsBell, BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import Profile from "../assets";
// import { PostImg } from "../assets";
// import { val, elena } from "../assets";
// import { loLocationOutline } from "react-icons/io5";
import { Status, Post, Feeds, Recommendations } from "../components";

const Home = () => {
  return (
    <div className="m-auto flex flex-col justify-center w-auto">
      <Status />
      <div className=" flex">
        <div className="md:w-[30rem] lg:w-[40rem] px-5">
          <div className="home-post">
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
  );
};

export default Home;
