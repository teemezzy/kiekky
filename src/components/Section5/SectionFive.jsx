import React from "react";
import { chatIcon, Chat, Message } from "../../assets";
;
function SectionFive() {
    return (
        <div className="lg:flex lg:justify-center lg:items-center ">
            <div className=" lg:flex lg:w-5/12">
                <img
                    src={chatIcon}
                    alt="chat"
                    className=" mb-4 mx-auto  lg:h-[3rem]  lg:mx-6"
                />
                <div className="text-center lg:text-left mx-5 lg:mx-0">
                    <h2 className="font-medium text-homeProfileFont">Chat With People</h2>
                    <p className="text-[#828282]">
                        You also get to chat with other members of the community. You get to
                        talk about secrets and desires. You can also share photos and videos
                        with other members of Kiekky.
                    </p>
                </div>
            </div>

            <img
                src={Chat}
                alt="chat"
                className="px-[6rem] md:mx-auto lg:px-0 ml-0  lg:mx-0 lg:ml-[3rem] lg:w-5/12"
            />
        </div>
    );
}

export default SectionFive;
