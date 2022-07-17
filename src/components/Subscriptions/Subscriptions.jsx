import React from "react";
import { TiTick } from "react-icons/ti";

const Subscriptions = () => {
  return (
    <div className="lg:w-[984px] w-[347px] h-[792px] m-auto bg-white">
      <div className="text-center  pt-[44px]">
        <p className="font-bold text-[20px] text-[#6A52FD]">
          Personalized Plans For You
        </p>
        <p className="text-[#666666] mt-[7px]">
          Choose a plan that works best for you.
        </p>
    <div className='flex items-center justify-center m-auto lg:w-[960px] h-[24px] w-[] '>
          <div className='w-[86px] '>Bill Monthly</div>
            <label
              for="bill-toggle"
              className=" relative items-center mb-5 cursor-pointer mt-[19px] flex flex-col justify-center"
            >
              <input
                type="checkbox"
                value=""
                id="bill-toggle"
                className="sr-only peer"
              />
              <div className="w-[54px] h-[24px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-[#A8A8A8] peer-checked:after:translate-x-[2rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[15.43px] after:w-[16px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        <div className='w-[89px] '>Bill Annually</div>
    </div>

      </div>
      <div className="flex md:flex-row flex-col items-center justify-center m-auto lg:mt-[98px] mt-[28.19px]">
        <div className="w-[260px] bg-[#F6F4FF] pl-[25px] rounded-lg">
          <p className="text-[#6A52FD] font-extrabold text-[32px] mt-[29px]">
            500
          </p>
          <p className="font-bold text-[20px] mt-[28px] text-[#212121]">
            Basic
          </p>
          <p className="flex items-center mt-[20px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Hot Picks Ranking
          </p>
          <p className="flex items-center mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Explore Community
          </p>
          <p className="flex items-center mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Limited Media Upload
          </p>
          <p className="flex items-center mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Limited Date Applications
          </p>
          <p className="flex items-center mt-[31px] text-[#828282]">
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

        <div className="w-[260px] h-[530px] bg-[#6A52FD] lg:mt-0 mt-24 rounded-lg text-white pl-[25px] lg:-translate-y-16 ">
          <div className="flex items-center justify-around mt-[29px]">
            <p className=" font-extrabold text-[32px] ">1000</p>
            <p className="text-[12px] py-[5px] px-[8px] bg-white text-[#8645FF] rounded-md">
              Save 400
            </p>
          </div>
          <p className="font-bold text-[20px] mt-[28px]">Gold</p>
          <p className="flex items-center mt-[20px] ">
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

        <div className="w-[260px] bg-[#F6F4FF] rounded-lg pl-[25px] lg:mt-0 mt-24">
          <div className="flex items-center justify-around mt-[29px]">
            <p className="text-[#6A52FD] font-extrabold text-[32px] ">1500</p>
            <p className="text-[12px] py-[5px] px-[8px] bg-white text-[#8645FF] rounded-md">
              Save 400
            </p>
          </div>
          <p className="font-bold text-[20px] mt-[28px] text-[#212121">
            Premium
          </p>
          <p className="flex items-center mt-[20px] text-[#828282]">
            <span className="text-[#6A52FD]  mr-[15.33px]">
              <TiTick />
            </span>
            Hot Picks Ranking
          </p>
          <p className="flex items-center mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Recommendations
          </p>
          <p className="flex items-center  mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Stealth mode
          </p>
          <p className="flex items-center  mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Unlimited Date Applications
          </p>
          <p className="flex items-center  mt-[31px] text-[#828282]">
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
