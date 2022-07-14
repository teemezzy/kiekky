import React, { useState } from "react";
import PersonalPicture from "./PersonalPicture";
import PersonalWall from "./PersonalWall";
import PersonalVideo from "./PersonalVideo";
import PersonalFollowing from "./PersonalFollowing";
import PersonalFollowers from "./PersonalFollowers";
import PersonalSubscribers from "./PersonalSubscribers";
import MobileInfo from "./MobileInfo";
import "./PersonalInfo.css";

function UserInfo(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };
  const activeContent = " ";
  const content = "bg-white w-full hidden p-[20px]";

  return (
    <div>
      <MobileInfo />
      <div className=" scale flex mx-4 mt-5 mb-5 sm:w-[100vw] overflow-x-scroll lg:w-[60rem]   ">
        <div className=" sm:w-[80%] ">
          <div
            className={`${
              toggleState === 1 ? "input-option-tab em " : "input-option-tab"
            } flex h-[3rem] sm:space-x-4 lg:space-x-5 `}
          >
            <div
              onClick={() => toggleTab(1)}
              className={`${
                toggleState === 1 ? "login-tab-active3" : ""
              }  py-[0.3rem] px-[2rem]  self-center  `}
            >
              <div>
                <p>Wall</p>
              </div>
            </div>

            <div
              onClick={() => toggleTab(2)}
              className={`${
                toggleState === 2 ? "login-tab-active3" : ""
              }  py-[0.3rem]  px-[2rem] self-center `}
            >
              <div>
                <p>Photos</p>
              </div>
            </div>

            <div
              onClick={() => toggleTab(3)}
              className={`${
                toggleState === 3 ? "login-tab-active3" : ""
              }  py-[0.3rem]  px-[2rem] self-center `}
            >
              <div>
                <p>Videos</p>
              </div>
            </div>

            <div
              onClick={() => toggleTab(4)}
              className={`${
                toggleState === 4 ? "login-tab-active3" : ""
              }  py-[0.3rem]  px-[2rem] self-center `}
            >
              <div>
                <p>Followers</p>
              </div>
            </div>

            <div
              onClick={() => toggleTab(5)}
              className={`${
                toggleState === 5 ? "login-tab-active3" : ""
              }  py-[0.3rem]  px-[2rem] self-center `}
            >
              <div>
                <p>Following</p>
              </div>
            </div>

            <div
              onClick={() => toggleTab(6)}
              className={`${
                toggleState === 6 ? "login-tab-active3" : ""
              }  py-[0.3rem]  px-[2rem] self-center `}
            >
              <div>
                <p>Subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={toggleState === 1 ? (content, activeContent) : content}>
        <PersonalWall />
      </div>

      <div className={toggleState === 2 ? (content, activeContent) : content}>
        <PersonalPicture />
      </div>
      <div className={toggleState === 3 ? (content, activeContent) : content}>
        <PersonalVideo />
      </div>

      <div className={toggleState === 4 ? (content, activeContent) : content}>
        <PersonalFollowers />
      </div>

      <div className={toggleState === 5 ? (content, activeContent) : content}>
        <PersonalFollowing />
      </div>

      <div className={toggleState === 6 ? (content, activeContent) : content}>
        <PersonalSubscribers />
      </div>
    </div>
  );
}

export default UserInfo;
