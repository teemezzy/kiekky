import React from "react";

const ChatRoom = () => {
  return (
    <div className="w-[490px]">
      <div className="w-[490px] h-[50px] m-auto">
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="w-[490px] h-[100px]"
        >
          Type in your message...
        </textarea>
      </div>
    </div>
  );
};

export default ChatRoom;
