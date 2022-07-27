import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const PayoutModal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="backdrop-blur-md bg-black bg-opacity-25 z-20 inset-0 fixed  m-auto">
      <div className="lg:w-[699px] w-[384px] rounded-lg lg:h-[575px] h-[480px] mt-[150px] m-auto bg-white flex flex-col justify-center items-center relative">
        <div className="bg-white ">
          <div
            className="absolute m-auto top-0 right-0 p-10 text-[#BDBDBD]"
            onClick={onClose}
          >
            <MdClose />
          </div>

          <div className="">
            <h2 className="text-[24px]">Request for Payout </h2>
            <p className="text-[#828282]">
              Please fill this form to request for payout
            </p>
          </div>
          <div className=" mt-[40px]">
            <p className="mb-[10px]">Token Amount</p>
            <input
              type="text"
              placeholder="Enter Token Amount"
              className="bg-[#F6F4FF] rounded-lg py-[10px] px-[19px] lg:w-[464px] w-[288px] outline-[#6A52FD]"
            />
          </div>
          <div className="mt-[40px]">
            <p className="mb-[10px]">Token Value</p>
            <input
              type="text"
              placeholder="N4000"
              className="bg-[#F6F4FF] rounded-lg py-[10px] px-[19px] lg:w-[464px] w-[288px] "
              disabled
            />
          </div>
          <button className="bg-[#6A52FD] rounded-lg text-white py-[16.5px] lg:px-[202px] px-[114px] mt-[36px]">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayoutModal;
