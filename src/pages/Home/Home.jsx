import React, { useEffect } from "react";
import { Status, Feeds, Recommendations, UserNav, MobileNav } from "../../components";
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
            <Sidebar />
          </div>
          <div className=" min-h-screen  lg:w-[970px] w-[100vw] m-auto ">
            <div className="lg:w-[970px] w-[352px] m-auto ">
              <Status />
            </div>


            <div className=" lg:w-[970px]  m-auto ">
              <div className="lg:w-[970px] ">
                <div className="lg:flex lg:gap-7 justify-between">
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
    </div>
  );
};

export default Home;
