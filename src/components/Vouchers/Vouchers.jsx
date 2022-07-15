import React from "react";

const Vouchers = () => {
  return (
    <div className="lg:w-[984px] w-[347px] lg:h-[1044px] h-[609px] m-auto bg-white">
      <div className="lg:w-[689px] w-[284px] lg:pt-[98px] pt-[40px] m-auto">
        <h2 className="text-[18px] font-semibold text-[#212121]">
          How do I get a Voucher?
        </h2>
        <p className="text-[#4F4F4F] text-[18px]">
          You can receive a promo code on Kiekky social media platform, through
          our newsletter or our customer service. Valid codes are visible on
          your Kiekky account after activation.
        </p>
      </div>

      <div className="lg:w-[689px] w-[284px] lg:mt-[64px] mt-[38px] m-auto">
        <h2 className="text-[18px] font-semibold text-[#212121]">
          How do I use my code?
        </h2>
        <p className="text-[#4F4F4F] text-[18px] ">
          Here you can redeem your code. Enter it in the field below and your
          free credit will be automatically added to your Kiekky account. Don't
          forget that codes can expire or only be active for a short time, so
          it's best to use them right away.
        </p>
      </div>

      <div className="flex flex-col lg:w-[685px] w-[284px] lg:mt-[74px] mt-[39px] m-auto">
        <p className="text-[16px] font-semibold text-[#212121] mb-[10px] ">
          Voucher Code
        </p>
        <input
          placeholder="Insert Voucher Code"
          type="text"
          className="bg-[#F6F4FF] py-[16.5px] pl-[19px] rounded-lg"
        />
        <button className="bg-[#6A52FD] text-white py-[16.5px] lg:px-[282.5px] px-[111px] rounded-lg mt-[30px]">
          Activate
        </button>
      </div>
    </div>
  );
};

export default Vouchers;
