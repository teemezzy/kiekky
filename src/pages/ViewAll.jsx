import React, { useEffect, useState } from "react";
import { ViewAll } from ".";
import {
  Sidebar,
  UserNav,
  Status,
  HotPicks,
  Members,
  MobileNav,
  ViewAllHotPicks
} from "../components";

function Community(props) {
  return (
    <div className="messages mt-[6.3rem] bg-[#F9FAFA]">
      <UserNav />
      <div className="flex ">
        <div className=" hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className=" lg:w-[1000px] m-auto w-[327px] ">
         
          <ViewAllHotPicks />
        </div>
      </div>

      <div className="mobile-nav">
        <MobileNav />
      </div>
    </div>
  );
}

export default Community;
