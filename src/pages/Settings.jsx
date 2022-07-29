import React, { useState } from "react";
import {
  Sidebar,
  UserNav,
  Password,
  SetSubscription,
  SetSub,
  ProfileVerification,
  Notifications,
  MobileNav,
} from "../components";

const Settings = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const activeTabs =
    "text-[#6A52FD] text-[16px] lg:py-[16.5px] lg:w-[167px] w-[126px] m-auto text-center bg-white cursor-pointer outline-none";
  const tabs =
    "text-[#BDBDBD] lg:w-[157px] text-[16px] text-center m-auto cursor-pointer outline-none";

  const activeContent = "";
  const content = "bg-white w-full hidden p-[20px]";

  return (
    <div className="flex bg-[#F9FAFA] pb-[117px]">
      <div className="messages mt-[6.3rem] bg-[#F9FAFA]">
        <UserNav />
        <div className="flex ">
          <div className=" hidden  lg:block sidebar_prt pt-8">
            <Sidebar />
          </div>
        </div>
        <MobileNav />
      </div>
      <div className=" mt-[8.5rem] w-[984px] m-auto ">
        {/* Title For TabMenu */}
        <div className="lg:w-[42.125rem] w-[327px] overflow-x-scroll lg:overflow-x-auto scale">
          <div className="flex lg:w-auto w-[200vw]">
            <div
              className={toggleState === 1 ? (tabs, activeTabs) : tabs}
              onClick={() => toggleTab(1)}
            >
              Password
            </div>
            <div
              className={toggleState === 2 ? (tabs, activeTabs) : tabs}
              onClick={() => toggleTab(2)}
            >
              Notification
            </div>
            <div
              className={toggleState === 3 ? (tabs, activeTabs) : tabs}
              onClick={() => toggleTab(3)}
            >
              Set Subscription
            </div>
            <div
              className={toggleState === 4 ? (tabs, activeTabs) : tabs}
              onClick={() => toggleTab(4)}
            >
              Profile Verification
            </div>
          </div>
        </div>

        {/* The content within each box  */}
        <div className={toggleState === 1 ? (content, activeContent) : content}>
          <Password />
        </div>
        <div className={toggleState === 2 ? (content, activeContent) : content}>
          <Notifications />
        </div>
        <div className={toggleState === 3 ? (content, activeContent) : content}>
          <SetSubscription />
        </div>
        <div className={toggleState === 4 ? (content, activeContent) : content}>
          <ProfileVerification />
        </div>
      </div>
    </div>
  );
};

export default Settings;
