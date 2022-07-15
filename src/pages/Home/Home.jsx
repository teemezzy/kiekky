import React from "react";
import { Status, Post, Feeds, Recommendations, UserNav, MobileNav } from "../../components";
import { Sidebar } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-[#F9FAFA]">
      <UserNav /> 
      <div className="side-home flex mt-[6rem] bg-[#F9FAFA]">
        <div className=" fixed h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className=" lg:ml-[24rem] ">
          <Status />
          <div className="flex justify-center lg:justify-start">
            <div className=" md:w-[30rem] lg:w-[40rem] px-5 ">
              <Post />
              <div className="flex ">
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
