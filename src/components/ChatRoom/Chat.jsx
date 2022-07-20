import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { chatList } from "./ChatList";
import { FiSearch } from "react-icons/fi";

const Chat = () => {
  const [message, setMessage] = useState(1);

  const messageTab = (tab) => {
    setMessage(tab);
  };

  const active = "hover:bg-red-500";
  const inActive = "text-[#828282]";

  return (
    <div className="w-[490px] h-[1050px] flex flex-col justify-start">
      <div className="bg-white divide-y divide-opacity-50 divide-gray-300">
        <div className=" w-[423px] m-auto relative py-[27px]">
          <input
            type="text"
            placeholder="Search in messages..."
            className=" py-[14px] px-[20px] pr-[60px] border-2 rounded-lg text-[14px] bg-[#F6F4FF] w-[423px] "
          />
          <FiSearch className="absolute top-11 right-5 bg-[#F6F4FF] text-[#828282]" />
        </div>
        <div className="overflow-y-scroll h-[1000px] ">
          {chatList.map((chat) => (
          <div key={chat.id} >
            <NavLink
              to={chat.path}
              className={`${
                window.location.pathname === chat.path ? "active" : "inActive"
              } m-auto `}
              onClick={() => messageTab(1) }
            >
              <div className="text-right pr-10 w-full translate-y-4 h-0 text-xs text-[#333333]">
                {chat.timestamp}
              </div>
              <div className="flex items-center pl-6 py-[15px] ">
                <span className="mr-3 w-[40px] h-[40px]">{chat.avatar}</span>
                <div className=" ">
                  <span>{chat.name}</span>
                  <div className="w-[289px] m-auto mb-4  ">
                    {chat.lastMessage}
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
