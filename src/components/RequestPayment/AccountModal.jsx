import React from "react";
import { MdClose } from "react-icons/md";

const AccountModal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="lg:w-[699px] w-[384px] border-2 lg:h-[575px] h-[500px] lg:mt-[150px] lg:ml-[700px] m-auto fixed inset-0 bg-opacity-80 backdrop-blur-3xl bg-white flex flex-col justify-center items-center">
      <div className="bg-white">
        <div
          className="absolute m-auto top-0 right-0 p-10 text-[#BDBDBD]"
          onClick={onClose}
        >
          <MdClose />
        </div>

        <div className="">
          <h2 className="text-[24px]">Bank Account Details </h2>
          <p className="text-[#828282] lg:w-[306px] w-[294px]">
            Please fill this form to enter account details
          </p>
        </div>
        <div className=" mt-[40px]">
          <p className="mb-[10px]">Bank</p>
          <input type="text" />
        </div>
        <div className="">
          <p className="mb-[10px]">Account Number</p>
          <input
            type="text"
            className="border-2 py-[10px] px-[19px] lg:w-[464px] w-[288px]"
          />
        </div>
        <div className="">
          <p className="mb-[10px]">Account Name</p>
          <input
            type="text"
            className="border-2 py-[10px] px-[19px] lg:w-[464px] w-[288px]"
          />
        </div>

        <div className="flex justify-around lg:w-[464px] w-[288px] m-auto">
          <button className="lg:w-[216px] w-[135px] rounded-lg border-[#6A52FD] border-2 text-[#6A52FD] py-[16.5px] lg:px-[90.5px] px-[45px] mt-[50px]">
            Delete
          </button>
          <button className=" lg:w-[216px] w-[135px] rounded-lg bg-[#6A52FD] text-white py-[16.5px] lg:px-[90.5px] px-[45px] mt-[50px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
