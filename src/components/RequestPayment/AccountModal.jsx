import React from "react";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";

const AccountModal = ({ visible, onClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (!visible) return null;
  return (
    <div className="backdrop-blur-md bg-black bg-opacity-20 z-20 inset-0 fixed  m-auto">
      <div className="lg:w-[699px] w-[384px] lg:h-[575px] h-[480px] mt-[150px] m-auto bg-white flex flex-col justify-center items-center rounded-lg relative">
        <div className="bg-white ">
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
            <select
              {...register("country", { required: true })}
              defaultValue={"default"}
              name="bank"
              id="bank"
              className={` bg-[#F6F4FF]  py-[10px] px-5 w-full outline-none rounded-lg ${
                errors.bank &&
                "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
              }`}
            >
              <option
                value={"default"}
                disabled
                className="text-[13px] py-2 px-4"
              >
                Select Bank
              </option>
            </select>
          </div>
          <div className="">
            <p className="mb-[10px]">Account Number</p>
            <input
              type="text"
              placeholder="Enter Account Number"
              className=" bg-[#F6F4FF] rounded-lg  py-[10px] px-[19px] lg:w-[464px] w-[288px] outline-[#6A52FD]"
            />
          </div>
          <div className="">
            <p className="mb-[10px]">Account Name</p>
            <input
              type="text"
              placeholder="Enter Account Name"
              className="bg-[#F6F4FF] rounded-lg py-[10px] px-[19px] lg:w-[464px] w-[288px] outline-[#6A52FD]"
            />
          </div>

          <div className="flex justify-around lg:w-[464px] w-[288px] m-auto">
            <button className="lg:w-[216px]  text-[14px] w-[135px] rounded-lg border-[#6A52FD] border-2 text-[#6A52FD] py-[16.5px] lg:px-[90.5px] px-[45px] mt-[50px]">
              Delete
            </button>
            <button className=" lg:w-[216px] text-[14px] w-[135px] rounded-lg bg-[#6A52FD] text-white py-[16.5px] lg:px-[90.5px] px-[45px] mt-[50px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
