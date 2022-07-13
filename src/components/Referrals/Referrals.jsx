import React from "react";
import { reg, link, token } from "../../assets";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Referrals = () => {
  return (
    <div className="lg:w-[984px] lg:h-[1044px] m-auto">
      <div className="text-[14px] text-[#828282] mt-[96px]">
        <p>
          Invite friends Kiekky. If they signup, you and your friends will get
          50 free Tokens.
        </p>
      </div>

      <div className="flex justify-evenly mt-[60px]">
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

      <div className="mt-[120px]">
        <p className="text-[18px] font-[500]">Share your referral link</p>
        <p className="w-[664px] font-[500] text-[14px] text-[#828288]">
          You can share your referral link by copying and pasting the link or by
          sharing it on social media platforms.
        </p>

        <div className="flex mt-[40px] ">
          <div className="w-[519px] flex ">
            <input
              placeholder="kiekky.com/referr..."
              type="text"
              className="bg-[#F6F4FF] py-[18.5px] px-[28.5px] rounded-bl-lg rounded-tl-lg"
            />
            <button className="bg-[#6A52FD] text-white py-[18.5px] px-[28.5px] rounded-lg">
              Copy Link
            </button>
          </div>

          <div className="flex justify-between w-[172px]">
            <div className="w-[36px] h-[36px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
              <a href="#"><FaFacebookF /></a>
              
            </div>
            <div className="w-[36px] h-[36px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
              <a href="#"><FaInstagram /></a>
              
            </div>
            <div className="w-[36px] h-[36px] m-auto rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
              <a href="#"><FaTwitter /></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
