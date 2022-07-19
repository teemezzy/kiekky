import React from "react";
import { NavLink } from "react-router-dom";
import { chatList } from "./ChatList";

const Chat = () => {
  const active = "hover:text-[#6a52fd]";
  const inActive = "text-[#828282]";
  
  return (
    <div>
      <div className="side_list ml-10 bg-white w-[17rem] divide-y divide-opacity-50  divide-gray-300">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className="ml-5 pt-5 items-center text-sm text-gray"
          >
            <NavLink
              to={chat.path}
              className={`${
                window.location.pathname === chat.path ? "active" : "inActive"
              }  flex items-center w-full h-[3.5rem] pl-5   `}
              onClick={chat.handleClick}
            >
              <span className="mr-3 ">{chat.avatar}</span>
              {chat.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
