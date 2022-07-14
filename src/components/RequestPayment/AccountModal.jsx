import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const AccountModal= ({visible, onClose}) => {
    if(!visible) return null;
  return (
    <div className="w-[699px] border-2 h-[575px] mt-[150px] ml-[700px] m-auto fixed inset-0 bg-opacity-80 backdrop-blur-3xl bg-white flex flex-col justify-center items-center">
      <div className="bg-white">
            <div className="absolute m-auto top-0 right-0 p-10 text-[#BDBDBD]" onClick={onClose}>
            <MdClose />
            </div>

            <div className=''>
            <h2 className='text-[24px]'>Saved Account </h2>
            <p className='text-[#828282]'>Please fill this form to request for payout</p>
            </div>
            <div className=' mt-[40px]'>
            <p className='mb-[10px]'>Token Amount</p>
            <input type="text" />
            </div>
            <div className=''>
            <p className='mb-[10px]'>Token Value</p>
            <input type="text" />
            </div>
            <button className='bg-[#6A52FD] text-white py-[16.5px] px-[202px] mt-[36px]'>Proceed</button>
      </div>
    </div>
  );
};

export default AccountModal;
