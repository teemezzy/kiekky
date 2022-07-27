import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import SubModal from "./SubModal";

const Subscriptions = () => {
  const [open500Modal, setOpen500Modal] = useState(false);
  const [open1000Modal, setOpen1000Modal] = useState(false);
  const [open1500Modal, setOpen1500Modal] = useState(false);

  const open500ModalHandler = () => setOpen500Modal(true);
  const close500ModalHandler = () => setOpen500Modal(false);

  const open1000ModalHandler = () => setOpen1000Modal(true);
  const close1000ModalHandler = () => setOpen1000Modal(false);

  const open1500ModalHandler = () => setOpen1500Modal(true);
  const close1500ModalHandler = () => setOpen1500Modal(false);

  return (
    <div className="lg:w-[984px] w-[350px] lg:h-[792px] h-[1960px] m-auto bg-white mb-[4rem] lg:mb-[0rem] ">
      <div className="text-center pt-[44px]">
        <p className="font-semibold text-[24px] lg:text-[30px] text-[#6A52FD]">
          Personalized Plans For You
        </p>
        <p className="text-[#666666] mt-[7px]">
          Choose a plan that works best for you.
        </p>
        <div className="flex space-x-[24px] mt-[54px] items-center justify-center m-auto lg:w-[960px] h-[24px] ">
          <div className="w-[86px] text-[#212121] ">Bill Monthly</div>
          <label
            htmlFor="bill-toggle"
            className=" relative items-center mb-5 cursor-pointer mt-[19px] flex flex-col justify-center"
          >
            <input
              type="checkbox"
              value=""
              id="bill-toggle"
              className="sr-only peer"
            />
            <div className="w-[40px] h-[1.2rem] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#A8A8A8] peer-checked:after:translate-x-[1rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <div className="w-[89px] text-[#212121]">Bill Annually</div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center m-auto lg:mt-[90px] mt-[28.19px]">
        <div className=" w-[280px] lg:w-[260px] bg-[#F6F4FF] pl-[25px] rounded-lg">
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
            Ranking in Community
          </p>
          <p className="flex items-center mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Monetize Media
          </p>
          <p className="flex items-center mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Unlimited Date Applications
          </p>

          <p className="flex items-center mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            25 Tokens
          </p>

          <button
            onClick={open500ModalHandler}
            className="bg-[#6A52FD] text-[14px] text-white rounded-lg w-[222px] h-[48px] mt-[42px] mb-[27px]"
          >
            Choose
          </button>
        </div>

        <div className=" w-[280px] lg:w-[260px] h-[530px] bg-[#6A52FD] lg:mt-0 mt-24 rounded-lg text-white pl-[25px] lg:-translate-y-16 ">
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
            Ranking in Community
          </p>
          <p className="flex items-center mt-[31px] pr-[15.33px]">
            <span className=" mr-[15.33px]">
              <TiTick />
            </span>
            Monetize Media
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
            75 Tokens
          </p>

          <button
            onClick={open1000ModalHandler}
            className="rounded-lg text-[14px] bg-white text-[#6A52FD] w-[222px] h-[48px] mt-[42px]"
          >
            Choose
          </button>
        </div>

        <div className=" w-[280px] lg:w-[260px] bg-[#F6F4FF] rounded-lg pl-[25px] lg:mt-0 mt-24 lg:mb-0 mb-[46px]">
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
            Ranking in Community
          </p>
          <p className="flex items-center  mt-[31px] text-[#828282]">
            <span className="text-[#6A52FD] mr-[15.33px]">
              <TiTick />
            </span>
            Monetize Media
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
            100 Tokens
          </p>

          <button
            onClick={open1500ModalHandler}
            className="rounded-lg text-[14px] bg-[#6A52FD] text-white w-[222px] h-[48px] mt-[42px] mb-[27px]"
          >
            Choose
          </button>
        </div>
      </div>
      <SubModal onClose={close500ModalHandler} visible={open500Modal} />
      <SubModal onClose={close1000ModalHandler} visible={open1000Modal} />
      <SubModal onClose={close1500ModalHandler} visible={open1500Modal} />
    </div>
  );
};

export default Subscriptions;
