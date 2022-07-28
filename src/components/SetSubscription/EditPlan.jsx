import React from "react";
import { MdClose } from "react-icons/md";

const EditPlan = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="backdrop-blur-md bg-black bg-opacity-25 z-20 inset-0 fixed  m-auto">
      <div className="lg:w-[699px] w-[384px] rounded-lg lg:h-[425px] h-[390px] mt-[150px] m-auto bg-white flex flex-col justify-center items-center relative">
        <div className="bg-white ">
          <div
            className="absolute m-auto top-0 right-0 lg:p-10 p-5 text-[#BDBDBD]"
            onClick={onClose}
          >
            <MdClose />
          </div>

          <div className="">
            <h2 className="text-[24px]">Edit Plan</h2>
            <p className="text-[#828282]">
              Choose what to offer your subscribers
            </p>
          </div>
          <div className=" mt-[40px]">
            <p className="mb-[10px] font-semibold">Token Amount</p>
            <input
              type="text"
              placeholder="Enter Token Amount"
              className="bg-[#F6F4FF] rounded-lg py-[19px] px-[19px] lg:w-[464px] w-[288px] outline-[#6A52FD]"
            />
          </div>
          <button className="bg-[#6A52FD] rounded-lg text-white lg:w-[464px] w-[288px] py-[18px] lg:px-[173.9px] px-[85.9px] mt-[36px]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPlan;
