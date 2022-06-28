import React from "react";
import { Sidebar } from "../components";

const Community = () => {
  return (
    <div className='flex bg-[#E5E5E5]'>
  
  <div className=" fixed  hidden lg:block sidebar_prt pt-8">
            <Sidebar />
            </div>

      <div className="ml-[22rem]">Community</div>
    </div>
  );
};

export default Community;
