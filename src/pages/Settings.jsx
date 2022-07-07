import React, { useState } from "react";
import {
  Sidebar,
  UserNav,
  Password,
  SetSubscription,
  ProfileVerification,
  Vouchers,
  Notifications,
  Referrals,
} from "../components";

function Settings() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const activeTabs =
    "text-[#6A52FD]  text-[16px] py-[16.5px] px-[53px] m-auto text-center border-t-2 border-r-2 border-l-2 bg-white cursor-pointer outline-none";
  const tabs =
    " text-[#BDBDBD] w-[157px] text-[16px]  text-center m-auto cursor-pointer outline-none";

  const activeContent = "";
  const content = "bg-white w-full hidden p-[20px]";
  return (
    <div className="flex bg-[#F9FAFA] pb-[117px]">
      <div className="messages mt-[6.3rem] bg-[#F9FAFA]">
        <UserNav />
        <div className="flex ">
          <div className="  hidden  lg:block sidebar_prt pt-8">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className=" mt-[8.5rem] w-[984px] m-auto ">
        {/* Title For TabMenu */}
        <div className="flex m-auto w-[58.9rem]">
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
          <div
            className={toggleState === 5 ? (tabs, activeTabs) : tabs}
            onClick={() => toggleTab(5)}
          >
            Referrals
          </div>

          <div
            className={toggleState === 6 ? (tabs, activeTabs) : tabs}
            onClick={() => toggleTab(6)}
          >
            Voucher
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
        <div className={toggleState === 5 ? (content, activeContent) : content}>
          <Referrals />
        </div>
        <div className={toggleState === 6 ? (content, activeContent) : content}>
          <Vouchers />
        </div>
      </div>
    </div>
  );
}

export default Settings;
