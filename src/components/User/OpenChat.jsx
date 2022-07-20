import React, { useEffect, useState } from 'react';
import axios from 'axios'


function OpenChat({ visible, onClose }) {

  const [feed, setFeed] = useState([])
  const url = "https://fakerapi.it/api/v1/persons?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, [])
  if (!visible) return null;
  return (
    <div className='fixed inset-0  bg-black bg-opacity-20 z-50
        backdrop-blur-sm flex justify-center items-center'>
      <div className="bg-white lg:h-[20rem] lg:w-[20rem] rounded-xl  ">
        <button className=' p-5 flex ml-auto' onClick={onClose}> x </button>

        <div className=" notify flex flex-col   mx-6 justify-center sm:items-center   ">
          {feed
            ? feed.map((feed, idx) => (
              <div
                key={idx}
                className="story-status  px-4 bg-white  rounded-2xl "
              >
                <div className="display-section ">
                  <p className=" ">

                  </p>
                  <div className=" pic-not  flex flex-col justify-center items-center m-auto   ">
                    <div className="">
                      <img
                        className=" feed-image w-[5rem]  h-[5rem] p-[2.7px] rounded-[50%]"
                        src={feed.image}
                        alt="profileImage"
                      />
                    </div>

                    <div className="w-full flex flex-col  justify-center items-center p-5 mx-5 ">
                      <p className="font-[700]">{feed.firstname}</p>
                    </div>
                  </div>

                  <p className="pb-5 text-sm sm:mb-5 lg:mb-0 flex justify-center">Chat with {feed.firstname} for 16 tokens </p>


                </div>

              </div>
            ))
            : null}
        </div>


        <button className='flex justify-center m-auto w-[8rem] lg:text-base lg:w-[8rem] 
         px-2 lg:px-6 py-1 bg-[#6a52fd] mb-8 text-white rounded-lg ' type="submit">Open Chat</button>


      </div>
    </div>
  );
}

export default OpenChat;