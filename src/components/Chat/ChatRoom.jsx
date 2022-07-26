import React, { useState } from "react";
import { BiWallet } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import SendRequestTokenModal from "./SendRequestTokenModal";

const ChatRoom = () => {
  const [openTokenModal, setOpenTokenModal] = useState(false);
  const openTokenModalHandler = () => setOpenTokenModal(true);
  const closeTokenModalHandler = () => setOpenTokenModal(false);

  return (
    <div className="w-[490px] h-[700px]   lg:block hidden">
      <div className="  bg-white">
        <div className="w-[490px]  m-auto bottom-0">
          <div className="w-[490px] m-auto relative bottom-0 overflow-y-scroll scale">
            <div className="w-[490px] h-[700px]"></div>

            <div className="relative">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-[490px] h-[105px] sticky resize-none border-t-2  active:border-4 py-[10px] overflow-y-scroll scale"
                placeholder="Type a message..."
              />
              <div className="flex items-center justify-center relative bottom-[90px]">
                <span onClick={() => {}}>
                  <span className="bg-[#6A52FD] rounded-full w-[36px] h-[36px] -translate-y-2 absolute right-5 flex items-center justify-center">
                    <RiSendPlaneFill className="text-white" />
                  </span>
                </span>

                <span onClick={openTokenModalHandler} className=" ">
                  <BiWallet className=" text-[#828282] absolute right-5 left-[82%]" />
                </span>

                <span onClick={() => {}} className="">
                  <BsEmojiSmile className=" text-[#828282] absolute right-5 left-[74%]" />
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <SendRequestTokenModal
        onClose={closeTokenModalHandler}
        visible={openTokenModal}
      />
    </div>
  );
};

export default ChatRoom;
