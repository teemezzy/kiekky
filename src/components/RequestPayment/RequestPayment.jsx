import React, { useState } from "react";
import "./Payout.CSS";
import PayoutModal from "./PayoutModal";
import AccountModal from "./AccountModal";
import { BsArrowReturnRight } from "react-icons/bs"
import { MdOutlineModeEditOutline } from "react-icons/md";

const RequestPayment = () => {
  const [openModal, setOpenModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);
  
  const accountModalOpen = () => setAccountModal(true);
  const accountModalClose = () => setAccountModal(false);

  return (
    <div className="bg-white h-screen pl-[55px] m-auto ">
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
        <div className='flex items-center gap-8 mb-[20px]'>
          <h3 className=" font-semibold">Saved Account</h3>
          <div onClick={accountModalOpen} className='text-[#6A52FD] w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#F6F4FF]' >
          <MdOutlineModeEditOutline/>
          </div>
        </div>

        <div>
          <h3 className="text-[#828282] mb-[6px]">Account Name</h3>
          <p className="text-[#212121]">Silver Hawk</p>
          <h3 className="text-[#828282] mt-[16px] mb-[6px]">Account Number</h3>
          <p className="text-[#212121]">1234567890</p>
          <h3 className="text-[#828282] mt-[16px] mb-[6px]">Bank Name</h3>
          <p className="text-[#212121]">Sanchy Kreations</p>
        </div>
      </div>

      <PayoutModal onClose={closeModalHandler} visible={openModal} />
      <AccountModal onClose={accountModalClose} visible={accountModal} />
    </div>
  );
};

export default RequestPayment;
