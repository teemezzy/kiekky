import React from 'react'
import {NavLink} from 'react-router-dom'
import {chatList} from './ChatList'

const Chat = () => {
  return (
    <div>
            <div className="side_list ml-10 bg-white w-[17rem] h-[40rem] divide-y divide-opacity-50  divide-gray-300">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className="ml-5 pt-5 items-center text-sm text-gray"
          >
            <NavLink
              to={chat.path}
              className={`${
                window.location.pathname === chat.path ? "active" : null
              }  flex items-center w-full h-[3.5rem] pl-5 text-[#828282] hover:text-[#6a52fd] `}
                onClick={chat.handleClick}
            >
              <span className="mr-3 ">{chat.icon}</span>
              {chat.link}
            </NavLink>
          </div>
        ))}

            </div>
    </div>
  )
}

export default Chat