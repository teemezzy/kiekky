import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import SubModalPremium from "./SubModalPremium";
import SubModalBasic from "./SubModalBasic";
import SubModalGold from "./SubModalGold";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getSub, reset } from "../../Redux/features/subscriptioncat/subSlice";

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
  const dispatch = useDispatch();
  const { subscription, isError, message } = useSelector(
    (state) => state.subscription
  );
  // console.log(subscription);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (subscription) {
      dispatch(reset());
    }
    dispatch(getSub());
  }, [isError, message, dispatch]);

  return (
    <>
      <div className="lg:w-[984px] w-[350px] lg:h-[792px] h-[1960px] m-auto bg-white mb-[4rem] lg:mb-[0rem] ">
        <div className="text-center pt-[34px]">
          <p className="font-semibold text-[24px] lg:text-[30px] text-[#6A52FD]">
            Personalized Plans For You
          </p>
          <p className="text-[#666666]">
            Choose a plan that works best for you.
          </p>
          <div className="flex space-x-[24px] mt-[24px] items-center justify-center m-auto lg:w-[960px] h-[14px] ">
            <div className="w-[86px] text-[#212121] leading-none ">
              Bill Monthly
            </div>
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
            <div className="w-[89px] text-[#212121] leading-none">
              Bill Annually
            </div>
          </div>
        </div>
        {subscription.map((sub, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col items-center justify-center m-auto lg:mt-[80px] mt-[28.19px]"
          >
            <div className=" w-[280px] lg:w-[260px] bg-[#F6F4FF] px-[25px] rounded-lg">
              <p className="text-[#6A52FD] font-extrabold text-[32px] mt-[29px]">
                {sub[0].no_of_token}
              </p>
              <p className="font-bold text-[20px] mt-[28px] text-[#212121]">
                {sub[0].name}
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
                {sub[0].sub_token} Tokens
              </p>

              <button
                onClick={open500ModalHandler}
                className="bg-[#6A52FD] text-[14px] text-white rounded-lg w-[222px] h-[48px] mt-[42px] mb-[27px]"
              >
                Choose
              </button>
            </div>

            <div className=" w-[280px] lg:w-[260px] h-[530px] bg-[#6A52FD] lg:mt-0 mt-24 rounded-lg text-white px-[25px] lg:-translate-y-16 ">
              <div className="flex items-center justify-around mt-[29px]">
                <p className=" font-extrabold text-[32px] ">
                  {sub[1].no_of_token}
                </p>
                <p className="text-[12px] py-[5px] px-[8px] bg-white text-[#8645FF] rounded-md">
                  Save 400
                </p>
              </div>
              <p className="font-bold text-[20px] mt-[28px]">{sub[1].name}</p>
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
                {sub[1].sub_token} Tokens
              </p>

              <button
                onClick={open1000ModalHandler}
                className="rounded-lg text-[14px] bg-white text-[#6A52FD] w-[222px] h-[48px] mt-[42px]"
              >
                Choose
              </button>
            </div>

            <div className=" w-[280px] lg:w-[260px] bg-[#F6F4FF] rounded-lg px-[25px] lg:mt-0 mt-24 lg:mb-0 mb-[46px]">
              <div className="flex items-center justify-around mt-[29px]">
                <p className="text-[#6A52FD] font-extrabold text-[32px] ">
                  {sub[2].no_of_token}
                </p>
                <p className="text-[12px] py-[5px] px-[8px] bg-white text-[#8645FF] rounded-md">
                  Save 400
                </p>
              </div>
              <p className="font-bold text-[20px] mt-[28px] text-[#212121">
                {sub[2].name}
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
                Prioritised Profile
              </p>
              <p className="flex items-center  mt-[31px] text-[#828282]">
                <span className="text-[#6A52FD] mr-[15.33px]">
                  <TiTick />
                </span>
                Set Personal Profile Subscriptions
              </p>
              <p className="flex items-center  mt-[31px] text-[#828282]">
                <span className="text-[#6A52FD] mr-[15.33px]">
                  <TiTick />
                </span>
                Stealth Mood
              </p>
              <p className="flex items-center  mt-[31px] text-[#828282]">
                <span className="text-[#6A52FD] mr-[15.33px]">
                  <TiTick />
                </span>
                {sub[2].sub_token} Tokens
              </p>

              <button
                onClick={open1500ModalHandler}
                className="rounded-lg text-[14px] bg-[#6A52FD] text-white w-[222px] h-[48px] mt-[42px] mb-[27px]"
              >
                Choose
              </button>
            </div>
          </div>
        ))}
        <SubModalGold onClose={close500ModalHandler} visible={open500Modal} />
        <SubModalBasic
          onClose={close1000ModalHandler}
          visible={open1000Modal}
        />
        <SubModalPremium
          onClose={close1500ModalHandler}
          visible={open1500Modal}
        />
      </div>
    </>
  );
};

export default Subscriptions;
