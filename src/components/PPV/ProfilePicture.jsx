import React, { useState, useEffect } from "react";
import axios from "axios";
// import { NavLink } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai'
import { VscLock } from 'react-icons/vsc'
import { Recommendations } from '../../components'
import { verified } from "../../assets";

const ProfilePicture = () => {
  const [story, setStory] = useState([])
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=8";
  const urlRec = "https://fakerapi.it/api/v1/persons?_quantity=10";


  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  useEffect(() => {
    axios.get(urlRec).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className="mb-[6rem] w-[327px]">
      <div className="feed-recommendation flex lg:gap-[50px] lg:w-[986px] w-[327px] m-auto">

        <div className="  w-[672px] py-10 videos bg-white rounded-xl ">

          <div className="    grid grid-cols-2 gap-[7px] lg:gap-[32px] w-[295px] lg:w-[567px]  m-auto ">

            {feed
              ? feed.map((feed, idx) => (
                <div key={idx} className="story-status relative  border-white ">

                  <div className=" ">
                    <div >


                      <div className="image ">
                        <div className="   ">


                          <div className=' inset-0 absolute   rounded-md bg-black bg-opacity-20 z-5 backdrop-blur-sm flex justify-center items-center'>
                            <div className="flex flex-col justify-center items-center">
                              {/* <BsPlay size='2rem ' color='white' /> */}
                              <VscLock color="white" />
                              <p className="text-white mt-3 text-sm lg:text-base">Unlock for 10 tokens</p>
                            </div>
                            
                          </div>

                        </div>
                        <div className="div  ">
                          <img
                            className=" lg:w-[264px] w-[144px] h-[148px]  lg:h-[271px] rounded-md"
                            src={feed.image}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              : null}

          </div>


        </div>
        <Recommendations />

      </div>
      <button className="block lg:hidden w-[295px] h-[50px] rounded-md text-[#6a52fd] border-[1px] border-[#6a52fd] m-auto ">View More</button>

      <div className="recom mt-4">
        <div>
          <div className="   py-2 videos bg-white rounded-xl ">
            <p className="lg:hidden block w-[295px] m-auto">Recommendations </p>

            <div className=" block mt-[1rem] grid grid-cols-2 gap-[7px] w-[295px] m-auto lg:w-[268px] lg:hidden ">

              {story
                ? story.map((story, idx) => (
                  <div key={idx} className="story-status ">
                    <div className="image relative">

                      <div className=" absolute  inset-x-0 bottom-0 bg-opacity-80 names w-[143px] h-[30px] bg-[#A8A8A8] rounded-b-md ">

                        <p className=" text-center py-[3px]  text-white">{story.firstname}  <span className=" h-[0.8rem]  inline-block"><img src={verified} alt="" /> </span>  </p>
                      </div>
                      <img
                        className="w-[144px] h-[121px] rounded-md"
                        src={story.image}
                        alt="recommendations"
                      />

                    </div>
                  </div>
                ))
                : null}
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default ProfilePicture;
