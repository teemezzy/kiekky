import React from "react";
import { reg, link, token } from "../../assets";
import { FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbBrandTwitter} from 'react-icons/tb'

const Referrals = () => {
  return (
    <div className="lg:w-[984px] w-[352px] lg:h-[1044px] h-[1096px] bg-white">
    <div className="text-[14px] text-[#828282] lg:pt-[96px] pt-[34px] lg:ml-[80px] lg:w-[527px] w-[264px] m-auto">
        <p>
        Invite your friends Kiekky. Get them to signup and get 5% of what they spend.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center lg:justify-evenly lg:mt-[60px] mt-[30px] lg:w-[814px] w-[178px] m-auto">
        <div className="text-center w-[178px] lg:w-auto">
          <div className="w-[80px] h-[80px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center ">
            <img src={link} alt="" />
          </div>
          <p className="font-semibold mb-[8px] mt-4">Send Invitation</p>
          <p className=" text-[14px] text-[#828282] w-[178px]">
            Send your referral code to your friends and tell them about Kiekky.
          </p>
        </div>

        <div className="text-center w-[178px] lg:w-auto lg:mt-auto mt-[30px]">
          <div className="w-[80px] h-[80px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center ">
            <img src={reg} alt="" />
          </div>
          <p className="font-semibold mb-[8px] mt-4">Registration</p>
          <p className=" text-[14px] text-[#828282] w-[178px]">
            They get registered on the Kiekky platform using your referral link.
          </p>
        </div>

        <div className="text-center w-[178px] mt-[30px] lg:mt-auto">
          <div className="w-[80px] h-[80px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center ">
            <img src={token} alt="" />
          </div>
          <p className="font-semibold mb-[8px] mt-4">Receive free tokens</p>
          <p className=" text-[14px] text-[#828282] w-[178px]">
            You and your friends will receive free tokens after transactions.
          </p>
        </div>
      </div>

      <div className="lg:mt-[120px] mt-[46px] lg:ml-[80px]">
        <div className='lg:w-[664px] w-[294px] m-auto lg:m-0'>
        <p className="text-[18px] font-[500]">Share your referral link</p>
        <p className=" font-[500] text-[14px] text-[#828288] mt-[13px]">
          You can share your referral link by copying and pasting the link or by
          sharing it on social media platforms.
        </p>
        </div>

        <div className="flex lg:flex-row flex-col mt-[40px]">
          <div className="lg:w-[519px] m-auto lg:m-0 flex">
            <input
              placeholder="kiekky.com/referr..."
              type="text"
              className="bg-[#F6F4FF] py-[18.5px] outline-none px-[19px] lg:w-[327px] w-[207px] rounded-bl-lg rounded-tl-lg"
            />
            <button className="-translate-x-2 bg-[#6A52FD] text-[14px] text-white py-[18.5px] lg:px-[20px] px-[12.17px] lg:w-[130px] w-[97.33px] rounded-lg">
              Copy Link
            </button>
          </div>

          <div className="flex justify-between lg:mt-0 mt-10 w-[172px] ml-5 lg:ml-0">
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
