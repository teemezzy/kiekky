import React, { useState, useEffect } from "react";
// import { PostImg } from "../../assets";
// import { val, elena } from "../../assets";
import axios from "axios";

function Feeds() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/books?_quantity=9";

    useEffect(() => {
      axios.get(url)
      .then((response) => 
      setFeed(response.data.data));
    }, []);

  return (
    <div>
      <div className="border-2 bg-white py-4 rounded-lg mb-5 ">
        <div className="postItem  items-center mb-7 ">
          <div className="username flex items-center mx-5 ">
            <div className="img-container">
              <img
                className="mb-2 w-[4rem] h-[4rem]  p-[1.5px] border-red-500 border-2 rounded-[50%] cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
                src={feed.image}
                alt="icon"
              />
            </div>

            <div className="text  mx-2">
              <p className="font-[700]">Elena</p>
              <div className="location flex  text-gray text-sm ">
                <p className="">
                  <span className="loc">
                    
                    <loLocationOutline color="gray" />
                  </span>
                  Lagos, Nigeria
                </p>
                {/* <p className="text-[gray]  ">2days ago</p> */}
              </div>
            </div>
          </div>

          <div className="caption pt-5 mx-5">
            <p>I love how i look in this top.</p>
          </div>
        </div>

        <div className="post-img h-[9rem] md:h-[10rem] flex  mx-5">
          <img
            className="mr-5 w-[10rem] lg:w-[16rem]"
            src={feed.image}
            alt=""
          />
          <img className=" w-[10rem] lg:w-[16rem]" src={feed.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feeds;
