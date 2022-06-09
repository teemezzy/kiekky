import React from "react";
import {chatIcon, Chat, Message} from "../../assets";
;
function SectionFive() {
  return (
    <div className="md:flex md:justify-center md:items-center ">
      <div className=" md:flex md:w-5/12">
        <img
          src={chatIcon}
          alt="chat"
          className=" mb-4 mx-auto md:h-[3rem]  md:mx-6"
        />
        <div className="text-center md:text-left mx-[2rem] md:mx-0">
          <h2 className="font-medium text-homeProfileFont">Chat With People</h2>
          <p className="text-gray-400">
            You also get to chat with other members of the community. You get to
            talk about secrets and desires. You can also share photos and videos
            with other members of Kiekky.
          </p>
        </div>
      </div>

      <img
        src={Chat}
        alt="chat"
        className="px-[6rem] md:px-0 ml-0 mx-[4rem] md:mx-0 md:ml-[3rem] md:w-5/12"
      />
    </div>
  );
}

export default SectionFive;
