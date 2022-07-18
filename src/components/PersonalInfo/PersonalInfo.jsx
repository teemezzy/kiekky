import React, { useState } from "react";
import PersonalPicture from "./PersonalPicture";
import PersonalWall from "./PersonalWall";
import PersonalVideo from "./PersonalVideo";
import PersonalFollowing from "./PersonalFollowing";
import PersonalFollowers from "./PersonalFollowers";
import PersonalSubscribers from "./PersonalSubscribers";
import MobileInfo from "./MobileInfo";
import './PersonalInfo.css'

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
            <div className=" scale flex m-auto mt-5 mb-5 overflow-x-scroll w-[326px] lg:w-[984px]  ">
                <div className="width-scale w-[284px] lg:w-[892px]  ">
                    <div
                        className={`${toggleState === 1 ? "input-option-tab em " : "input-option-tab2"
                            } flex h-[3rem] sm:space-x-4 lg:space-x-5 `}
                    >
                        <div
                            onClick={() => toggleTab(1)}
                            className={`${toggleState === 1 ? "login-tab-active3" : ""
                                }  py-[0.3rem] px-[1.5rem]  self-center  `}
                        >
                            <div>
                                <p className=" text-center w-[4rem] ">My Wall</p>
                            </div>
                        </div>

                        <div
                            onClick={() => toggleTab(2)}
                            className={`${toggleState === 2 ? "login-tab-active3" : ""
                                }  py-[0.3rem]  px-[2rem] self-center `}
                        >
                            <div>
                                <p className=" ">Photos</p>
                            </div>
                        </div>

                        <div
                            onClick={() => toggleTab(3)}
                            className={`${toggleState === 3 ? "login-tab-active3" : ""
                                }  py-[0.3rem]  px-[2rem] self-center `}
                        >
                            <div>
                                <p className="">Videos</p>
                            </div>
                        </div>

                        <div
                            onClick={() => toggleTab(4)}
                            className={`${toggleState === 4 ? "login-tab-active3" : ""
                                }  py-[0.3rem]  px-[2rem] self-center `}
                        >
                            <div>
                                <p className=" ">Followers</p>
                            </div>
                        </div>

                        <div
                            onClick={() => toggleTab(5)}
                            className={`${toggleState === 5 ? "login-tab-active3" : ""
                                }  py-[0.3rem]  px-[2rem] self-center `}
                        >
                            <div>
                                <p className=" ">Following</p>
                            </div>
                        </div>

                        <div
                            onClick={() => toggleTab(6)}
                            className={`${toggleState === 6 ? "login-tab-active3" : ""
                                }  py-[0.3rem]  px-[2rem] self-center `}
                        >
                            <div>
                                <p className=" ">Subscribers</p>
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
