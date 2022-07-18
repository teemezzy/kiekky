import React from "react";
import { Sidebar, UserNav, User, UserInfo, PPV, MobileNav } from "../../components";

function UserProfile(props) {
  return (
    <div className="notifications bg-[#F9FAFA]  ">
      <UserNav />
      <div className="flex mt-[6rem] bg-[#F9FAFA] ">
        <div className="  h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className="lg:w-[984px] w-[327px] m-auto  ">
          <User />
          <UserInfo />
          <PPV />
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default UserProfile;
