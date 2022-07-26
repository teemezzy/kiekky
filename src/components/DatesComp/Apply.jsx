import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

function Apply() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=21";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className="scale-width ">
      <div className="  pt-[40px]  lg:w-[980px] w-[327px] m-auto bg-white rounded-lg ">
        <div className="lg:w-[912px] gap-[24px]  grid lg:grid-cols-3 lg:gap-[30px]  h m-auto  ">
          {feed
            ? feed.map((feed, idx) => (
                <div key={idx} className="    ">
                  <div className="inner-content flex flex-col justify-center items-center m-auto h-[23.4rem] w-[17.75rem] ">
                    {/* {feed.description} */}
                    <p className="text-xl   ">Today at 9PM(GMT+1)</p>
                    <p className="text-xs text-[#BDBDBD] ">
                      Time remaining expired
                    </p>
                    <div className="imagess my-3">
                      <img
                        src={feed.image}
                        alt=""
                        className="  h-[6.3rem] w-[6.3rem] rounded-full "
                      />
                    </div>
                    <p className="my-1">
                      {feed.firstname}
                      <span className="text-[#828282] mx-3"> 30 </span>
                    </p>

                    <div className="mb-3">
                      <p className="text-[#999999] ">
                        I am looking for:
                        <span className="inline-block  mx-1 ">

                          <BiFemaleSign color="#2F80ED" size={22} />{" "}
                        </span>
                        <span className="inline-block">
                          {" "}
                          <BiMaleSign color="#DA1C5C" size={21} />{" "}
                        </span>{" "}
                      </p>
                    </div>

                    <div className="options flex space-x-2">
                      <button className="bg-[#F6F4FF] text-[#999999] px-4 text-xs rounded-[4px] ">
                        Dinner
                      </button>
                      <button className="bg-[#F6F4FF] text-[#999999] px-4 text-xs rounded-[4px] ">
                        Drinks
                      </button>
                      <button className="bg-[#F6F4FF] text-[#999999] px-4 text-xs rounded-[4px] ">
                        Freaky
                      </button>
                    </div>

                    <div className="but flex mt-[25px] space-x-5">
                      <button className=" w-[7rem]  text-[#BDBDBD] text-[14px] border-[1.5px] rounded-xl outline-[#BDBDBD]">
                        Decline
                      </button>
                      <button className="w-[7rem] py-2 text-[14px] text-white bg-[#6a52fd] rounded-xl ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Apply;
