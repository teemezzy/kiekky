import React from "react";
import { Sidebar, UserNav, Notification_comp } from "../../components";
import "./Notification.css";

function Notifications(props) {
  return (
    <div className="notifications bg-[#F9FAFA]">
      <UserNav />
      <div className="flex mt-[6rem] bg-[#F9FAFA] ">
        <div className="  fixed h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className="lg:ml-[20rem] ">
          <Notification_comp />
        </div>
      </div>
    </div>
  );
}

export default Notifications;
