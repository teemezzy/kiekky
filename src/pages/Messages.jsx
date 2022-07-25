import React from "react";
import { Sidebar, UserNav, MobileNav, Chat, ChatRoom } from "../components";


function Messages(props) {
  return (
    <div className="messages mt-[6.3rem] bg-[#F9FAFA]">
      <UserNav />
      <div className="flex lg:flex-row  lg:pt-8">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className=" lg:w-[980px] w-[490px]   m-auto flex">
          <Chat/> 
          <ChatRoom/>

        </div>
          <div className="mobile-nav fixed">
          <MobileNav />
        </div>
      </div>
      
    </div>
  );
}

export default Messages;
