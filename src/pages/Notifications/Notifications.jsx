import React from "react";
import { Sidebar, UserNav, Notification_comp } from "../../components";
import "./Notification.css";

function Notifications(props) {
  return (
    <div className="notifications bg-[#F9FAFA]">
      <UserNav />
      <div className="flex mt-[6rem] bg-[#F9FAFA] ">
        <div className=" h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className=" lg:w-[872px] lg:h-[626px] w-[327px] m-auto ">
          <Notification_comp />
        </div>
      </div>
    </div>
  );
}

export default Notifications;
