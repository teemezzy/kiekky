import React from "react";
import { BiWallet } from "react-icons/bi";

const ChatRoom = () => {
  return (
    <div className="w-[490px] min-h-full lg:block hidden">
      <div className=" relative bg-white">
      <div className="w-[490px] h-0 m-auto absolute bottom-0">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-[490px] h-[100px] resize-none border-4 active:border-4"
          placeholder="Type a message..."
        />
        <span>
          <BiWallet className="absolute top-3 right-5 bg-[#F6F4FF] text-[#828282]" />
        </span>
      </div>
      </div>
    </div>
  );
};

export default ChatRoom;
