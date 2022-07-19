import React from "react";
import { Sidebar, UserNav, MobileNav, Chat, ChatRoom } from "../components";


function Messages(props) {
  return (
    <div className="messages mt-[6.3rem] bg-[#F9FAFA]">
      <UserNav />
      <div className="flex pt-8">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className=" w-[980px] h-[1050px] m-auto flex">
          <Chat/> 
          <ChatRoom/>

        </div>
      </div>

      <div className="mobile-nav">
        <MobileNav />
      </div>
    </div>
  );
}

export default Messages;
