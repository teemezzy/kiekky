import React, { useEffect} from "react";
import { Status, Post, Feeds, Recommendations, UserNav, MobileNav } from "../../components";
import { Sidebar } from "../../components";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    document.title = "My Feeds | Kiekky"
  }, []);
 


  return (
    <div className="bg-[#F9FAFA]  max-w-full">
      <UserNav /> 
      <div className=" mt-[6rem] m-auto bg-[#F9FAFA]">
        <div className="relative flex">
          <div className=" sticky h-[100vh] hidden lg:block pt-8">
            <Sidebar  />
          </div>
          <div className=" min-h-screen  lg:w-[970px] w-[327px]  m-auto ">
            <Status />
            <div className=" ">
              <div className=" lg:w-[970px] w-[327px] m-auto ">
                <div className="flex gap-7 justify-between">
                  <Feeds />
                  <Recommendations />
                </div>
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
