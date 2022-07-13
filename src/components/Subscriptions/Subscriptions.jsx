import React from "react";
import { TiTick } from "react-icons/ti";

const Subscriptions = () => {
  return (
    <div className="w-[984px] m-auto">
      <div className="text-center mt-[44px]">
        <p className="font-bold text-[20px] text-[#6A52FD]">
          Personalized Plans For You
        </p>
        <p className="text-[#666666] mt-[7px]">
          Choose a plan that works best for you.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center m-auto mt-[98px]">
        <div className="w-[260px] bg-[#F6F4FF] pl-[25px] rounded-lg">
          <p className="text-[#6A52FD] font-extrabold text-[32px] mt-[29px]">
            500
          </p>
          <p className="font-bold text-[20px] mt-[28px]">Basic</p>
          <p className="flex items-center mt-[20px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Hot Picks Ranking
          </p>
          <p className="flex items-center mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Explore Community
          </p>
          <p className="flex items-center mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Limited Media Upload
          </p>
          <p className="flex items-center mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Limited Date Applications
          </p>
          <p className="flex items-center mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            25 Tokens
          </p>

          <button
            onClick={() => {}}
            className="bg-[#6A52FD] text-white rounded-lg py-[17.5px] px-[77.5px] mt-[42px] mb-[27px]"
          >
            Choose
          </button>
        </div>

        <div className="w-[260px] bg-[#6A52FD] rounded-lg text-white pl-[25px] -translate-y-16 ">
          <div className="flex items-center justify-around mt-[29px]">
            <p className=" font-extrabold text-[32px] ">1000</p>
            <p className="text-[12px] py-[5px] px-[8px] bg-white text-[#8645FF] rounded-md">
              Save 400
            </p>
          </div>
          <p className="font-bold text-[20px] mt-[28px]">Gold</p>
          <p className="flex items-center mt-[20px]">
            <span className=" mr-[15.33px]">
              <TiTick />
            </span>
            Hot Picks Ranking
          </p>
          <p className="flex  items-center mt-[31px]">
            <span className=" mr-[15.33px]">
              <TiTick />
            </span>
            Recommendations
          </p>
          <p className="flex items-center mt-[31px] pr-[15.33px]">
            <span className=" mr-[15.33px]">
              <TiTick />
            </span>
            Unlimited Media Upload
          </p>
          <p className="flex items-center mt-[31px]">
            <span className=" mr-[15.33px]">
              <TiTick />
            </span>
            Unlimited Date Applications
          </p>
          <p className="flex items-center mt-[31px]">
            <span className=" mr-[15.33px]">
              <TiTick />
            </span>
            100 Tokens
          </p>

          <button
            onClick={() => {}}
            className="rounded-lg bg-white text-[#6A52FD] py-[17.5px] px-[77.5px] mt-[42px]"
          >
            Choose
          </button>
        </div>

        <div className="w-[260px] bg-[#F6F4FF] rounded-lg pl-[25px]">
          <div className="flex items-center justify-around mt-[29px]">
            <p className="text-[#6A52FD] font-extrabold text-[32px]">1500</p>
            <p className="text-[12px] py-[5px] px-[8px] bg-white text-[#8645FF] rounded-md">
              Save 400
            </p>
          </div>
          <p className="font-bold text-[20px] mt-[28px]">Premium</p>
          <p className="flex items-center mt-[20px]">
            <span className="text-[#6A52FD]  mr-[15.33px]">
              <TiTick />
            </span>
            Hot Picks Ranking
          </p>
          <p className="flex items-center mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Recommendations
          </p>
          <p className="flex items-center  mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Stealth mode
          </p>
          <p className="flex items-center  mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Unlimited Date Applications
          </p>
          <p className="flex items-center  mt-[31px]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            1500 Tokens
          </p>

          <button
            onClick={() => {}}
            className="rounded-lg bg-[#6A52FD] text-white py-[17.5px] px-[77.5px] mt-[42px] mb-[27px]"
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
