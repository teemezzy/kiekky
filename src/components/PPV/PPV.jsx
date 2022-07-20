import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import ProfilePost from "./ProfilePost";
import ProfileVideo from "./ProfileVideo";

function UserInfo(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
    console.log(tab);
  };
  const activeContent = " ";
  const content = "bg-white w-full hidden p-[20px] cursor-pointer ";

  return (
    <div>
      <div className=" flex mt-5  mb-5 sm:items-center lg:items-start sm:w-[100vw] lg:w-[60rem] ">
        <div
          className={`${
            toggleState === 1 ? "input-option-tab em " : "input-option-tab"
          } flex h-[3rem] `}
        >
          <div
            onClick={() => toggleTab(1)}
            className={`${
              toggleState === 1 ? "login-tab-active2" : ""
            }  py-[0.3rem] px-[2rem]  self-center  `}
          >
            <div>
              <p className=" text-[#898989]">Post</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={`${
              toggleState === 2 ? "login-tab-active2" : ""
            }  py-[0.3rem]  px-[1.5rem] self-center `}
          >
            <div>
              <p className=" text-[#898989]">Pictures</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(3)}
            className={`${
              toggleState === 3 ? "login-tab-active2" : ""
            }  py-[0.3rem]  px-[1.8rem] self-center `}
          >
            <div>
              <p className=" text-[#898989]">Videos</p>
            </div>
          </div>
        </div>
      </div>

      <div className={toggleState === 1 ? (content, activeContent) : content}>
        <ProfilePost />
      </div>

      <div className={toggleState === 2 ? (content, activeContent) : content}>
        <ProfilePicture />
      </div>
      <div className={toggleState === 3 ? (content, activeContent) : content}>
        <ProfileVideo />
      </div>
    </div>
  );
}

export default UserInfo;
