import React from "react";
import { reg, link, token } from "../../assets";
import { FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbBrandTwitter} from 'react-icons/tb'

const Referrals = () => {
  return (
    <div className="lg:w-[984px] w-[327px] lg:h-[1044px] m-auto bg-white">
    <div className="text-[14px] text-[#828282] pt-[96px] lg:ml-[80px] lg:w-[527px] ">
        <p>
        Invite your friends Kiekky. Get them to signup and get 5% of what they spend.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center lg:justify-evenly mt-[60px]">
        <div className="text-center w-[178px]">
          <div className="w-[80px] h-[80px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center ">
            <img src={link} alt="" />
          </div>
          <p className="font-semibold mb-[8px] mt-4">Send Invitation</p>
          <p className=" text-[14px] text-[#828282]">
            Send your referral code to your friends and tell them about Kiekky.
          </p>
        </div>

        <div className="text-center w-[178px]">
          <div className="w-[80px] h-[80px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center ">
            <img src={reg} alt="" />
          </div>
          <p className="font-semibold mb-[8px] mt-4">Registration</p>
          <p className=" text-[14px] text-[#828282]">
            They get registered on the Kiekky platform using your referral link.
          </p>
        </div>

        <div className="text-center w-[178px]">
          <div className="w-[80px] h-[80px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center ">
            <img src={token} alt="" />
          </div>
          <p className="font-semibold mb-[8px] mt-4">Receive free tokens</p>
          <p className=" text-[14px] text-[#828282]">
            You and your friends will receive free tokens after transactions.
          </p>
        </div>
      </div>

      <div className="mt-[120px] lg:ml-[80px]">
        <p className="text-[18px] font-[500]">Share your referral link</p>
        <p className="w-[664px] font-[500] text-[14px] text-[#828288]">
          You can share your referral link by copying and pasting the link or by
          sharing it on social media platforms.
        </p>

        <div className="flex lg:flex-row flex-col mt-[40px]">
          <div className="w-[519px] flex">
            <input
              placeholder="kiekky.com/referr..."
              type="text"
              className="bg-[#F6F4FF] py-[18.5px] pl-[19px] pr-[150px] rounded-bl-lg rounded-tl-lg"
            />
            <button className="bg-[#6A52FD] text-white py-[18.5px] px-[20px] w-[130px] rounded-lg">
              Copy Link
            </button>
          </div>

          <div className="flex justify-between w-[172px]">
            <div className="w-[36px] h-[36px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
              <a href="https://facebook.com/kiekkysupport"><FiFacebook /></a>
              
            </div>
            <div className="w-[36px] h-[36px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
              <a href="https://instagram.com/kiekkysupport"><AiOutlineInstagram/></a>
              
            </div>
            <div className="w-[36px] h-[36px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
              <a href="https://twitter.com/kiekkysupport"><TbBrandTwitter /></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
