import React from "react";

const Vouchers = () => {
  return (
    <div className='lg:w-[984px] lg:h-[1044px] m-auto'>
      <div className="w-[689px] mt-[98px] m-auto">
        <h2 className="text-[18px] font-semibold text-[#212121]">
          How do I get a Voucher?
        </h2>
        <p className="text-[#4F4F4F]">
          You can receive a promo code on Kiekky social media platform, through
          our newsletter or our customer service. Valid codes are visible on
          your Kiekky account after activation.
        </p>
      </div>

      <div className="w-[689px] mt-[64px] m-auto">
        <h2 className="text-[18px] font-semibold text-[#212121]">
          How do I use my code?
        </h2>
        <p className="text-[#4F4F4F]">
          Here you can redeem your code. Enter it in the field below and your
          free credit will be automatically added to your Kiekky account. Don't
          forget that codes can expire or only be active for a short time, so
          it's best to use them right away.
        </p>
      </div>

      <div className="flex flex-col w-[685px] mt-[74px] m-auto">
        <p className="text-[16px] font-semibold text-[#212121] mb-[10px] ">Voucher Code</p>
        <input
          placeholder="Insert Voucher Code"
          type="text"
          className="bg-[#F6F4FF] py-[16.5px] pl-[19px] rounded-lg"
        />
        <button className="bg-[#6A52FD] text-white py-[16.5px] px-[282.5px] rounded-lg mt-[30px]">
          Activate
        </button>
      </div>
    </div>
  );
};

export default Vouchers;
