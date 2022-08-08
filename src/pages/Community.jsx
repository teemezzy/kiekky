import React, { useEffect, useState } from "react";
import {
  Sidebar,
  UserNav,
  Status,
  HotPicks,
  Members,
  MobileNav,
} from "../components";

function Community(props) {
  return (
    <div className=" mt-[6.3rem] bg-[#F9FAFA] ">
      <UserNav />
      <div className="flex">
        <div className=" hidden lg:block pt-8">
          <Sidebar />
        </div>
        <Status />
        <div className=" lg:w-[1000px] m-auto w-[378px] mt-44">
          <HotPicks />
          <Members />
        </div>
      </div>

      <div className="mobile-nav">
        <MobileNav />
      </div>
    </div>
  );
}

export default Community;
