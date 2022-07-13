import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import Block from "./Block";



function PersonalSubscribers() {
    const [feed, setFeed] = useState([]);

    const [showMyBlock, setShowMyBlock] = useState(false);
    const handleOnCloseBlock = () => setShowMyBlock(false)

    const url = "https://fakerapi.it/api/v1/persons?_quantity=50";

    useEffect(() => {
        axios.get(url).then((response) => setFeed(response.data.data));
    }, []);

    return (
        <div className=" notify flex flex-col mt-10 divide-y  divide-slate-200 mx-6  justify-center  sm:items-center lg:items-start sm:w-[100vw] lg:w-[60rem] ">


            {feed
                ? feed.map((feed, idx) => (
                    <div
                        key={idx}
                        className="story-status not w-full px-4 bg-white py-6   "            >
 <div className="image-dots marker flex justify-between items-center ">
                        <div className="pic-not flex gap-2 items-center  ">
                            <div className="feed-image">
                                <img

                                    className=" w-[4rem] h-[4rem] p-[2.7px] rounded-[50%]"
                                    src={feed.image}
                                    alt="icon"
                                />
                            </div>

                            <div className="text-content">
                                <p className="font-bold text-xl mx-2 " >{feed.firstname}</p>
                                <p> </p>
                            </div>
                        </div>
                        
                  <span
                   onClick={() => setShowMyBlock(true)} 
                  > <BsThreeDotsVertical color="gray" /> </span>
                  </div>
                    </div>

                ))
                : null}

<Block visibleBlock={showMyBlock} onCloseBlock={handleOnCloseBlock} />

        </div>
    );
}

export default PersonalSubscribers;
