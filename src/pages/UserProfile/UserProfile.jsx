import React from "react";
import { Sidebar, UserNav, User, UserInfo, PPV } from "../../components";

function UserProfile(props) {
  return (
    <div className="notifications bg-[#F9FAFA]  ">
      <UserNav />
      <div className="flex mt-[6rem] bg-[#F9FAFA] m-auto">
        <div className="  fixed h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className="lg:ml-[20rem] lg:w-[60rem] ">
          <div>
            <User />
            <UserInfo />
            <PPV />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
