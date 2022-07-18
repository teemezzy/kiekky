import React from "react";
import { nounFace } from "../../assets";

const ProfileVerification = () => {
  return (
    <div className="w-[347px] lg:w-[984px] h-[498px] lg:h-[817px] bg-white lg:pt-[71px] pt-[27px] m-auto">
      <div className=" bg-[#F6F4FF] lg:w-[682px] w-[284px] lg:h-[603px] h-[394px] m-auto">
        <div className="w-[251px] lg:w-[408px] m-auto text-center lg:pt-[46px] pt-[21px]">
          <h3 className=" text-[18px] text-[#212121]">Verify your Profile</h3>
          <p className=" text-[13px] mt-[9px] text-[#828282]">
            Profile Verification is important for the safety of our community.
          </p>
          <p className=" text-[13px] text-[#828282]">
            Take a moment to verify yourself, please.
          </p>
        </div>

        <div className=" lg:w-[327px] w-[200px] flex flex-col items-center m-auto lg:mt-[60px] mt-[41px]">
          <img
            src={nounFace}
            alt="selfie-face"
            className=" lg:w-[327px] h-[132px] lg:h-[255px]"
          />
          <button className=" text-[16px] rounded-lg m-auto bg-[#6A52FD] lg:mt-[50px] mt-[38px] py-[17.5px] px-[60px]  text-white w-[204px] lg:w-[364px] h-[54px]">
            Snap Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileVerification;
