import React from "react";
import { Status, Post, Feeds, Recommendations, UserNav, MobileNav } from "../../components";
import { Sidebar } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-[#F9FAFA]">
      <UserNav /> 
      <div className="side-home flex mt-[6rem] bg-[#F9FAFA]">
        <div className=" h-[100vh] hidden lg:block pt-8">
          <Sidebar />
        </div>
        <div className="  lg:w-[970px] w-[327px]  m-auto ">
          <Status />
          <div className=" ">
            <div className=" md:w-[30rem] lg:w-[970px] w-[327px]  ">
              <Post />
              <div className="flex gap-7 justify-between">
                <Feeds />
                <Recommendations />
              </div>
             
            </div>
          </div>

        </div>
      </div>
      <div className="">
          <MobileNav />
          </div>
    </div>
  );
};

export default Home;
