import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import ProfilePost from "./ProfilePost";
import ProfileVideo from "./ProfileVideo";

function UserInfo() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
    // console.log(tab);
  };

  const activeTabs = "bg-[#6a52fd] text-[#ffffff] rounded-lg"
  const tabs = " text-center py-2 px-4 rounded-lg text-[#A8A8A8] flex ";

  const activeContent = " ";
  const content = "bg-white w-full hidden p-[20px] cursor-pointer ";
  return (
    <div>
      <div className=" flex my-5 lg:my-10 items-center lg:items-start w-[326px] lg:w-[984px] ">
        <div className="flex h-[3rem] cursor-pointer"
         
        >
          <div
            onClick={() => toggleTab(1)}
            className={`${
              toggleState === 1 ? activeTabs : tabs
            }  py-[0.3rem] px-[2rem] self-center`}
          >
            <div>
              <p >Post</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={`${
              toggleState === 2 ? activeTabs : tabs
            }  py-[0.3rem]  px-[1.5rem] self-center `}
          >
            <div>
              <p >Pictures</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(3)}
            className={`${
              toggleState === 3 ? activeTabs : tabs
            }  py-[0.3rem]  px-[1.8rem] self-center `}
          >
            <div>
              <p >Videos</p>
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
