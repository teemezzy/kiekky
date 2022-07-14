import React, { useState } from "react";
import "./Payout.CSS";
import { BsArrowReturnRight } from "react-icons/bs";

const RequestPayment = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <div className="bg-white h-screen pl-[55px]">
      <p className="pt-[47px] pb-[26px] text-[#828282]">
        You can request for payout
      </p>
      <div className="request ">
        <button onClick={openModalHandler}>
          <div className=" w-64 h-36 flex flex-col justify-center items-center border-2 rounded-2xl">
            <div className="w-[32px] h-[32px] rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
              <BsArrowReturnRight />
            </div>
            <p className="text-[14px]">Request Payout</p>
          </div>
        </button>
      </div>

      <div className="mt-[116px]">
        <h3 className="mb-[20px] font-semibold">Saved Account</h3>

        <div>
          <h3 className="text-[#828282] mb-[6px]">Account Name</h3>
          <p className="text-[#212121]">Silver Hawk</p>
          <h3 className="text-[#828282] mt-[16px] mb-[6px]">Account Number</h3>
          <p className="text-[#212121]">1234567890</p>
          <h3 className="text-[#828282] mt-[16px] mb-[6px]">Bank Name</h3>
          <p className="text-[#212121]">Sanchy Kreations</p>
        </div>
      </div>
    </div>
  );
};

export default RequestPayment;
