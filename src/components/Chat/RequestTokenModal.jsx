import React from 'react'
import { MdClose } from "react-icons/md"

const RequestTokenModal  =  ({ visible, onClose }) => {
    if (!visible) return null;
  return (
    <div className="backdrop-blur-md bg-opacity-60 inset-0 fixed  m-auto">
      <div className="lg:w-[699px] w-[384px] border-2 lg:h-[358px] h-[158px] mt-[150px] m-auto bg-white flex flex-col justify-center items-center relative">
        <div className="bg-white ">
          <div
            className="absolute m-auto top-0 right-0 p-10 text-[#BDBDBD]"
            onClick={onClose}
          >
            <MdClose />
          </div>

          <div className="">
            <h2 className="text-[24px]">Request Token from Tolani </h2>
          </div>
          <div className=" mt-[40px]">
            <p className="mb-[10px] font-semibold">Token Amount</p>
            <input
              type="text"
              className=" py-[10px] px-[19px] lg:w-[464px] w-[288px] rounded-lg bg-[#F6F4FF] "
            />
          </div>
          <div className=" w-[464px] flex justify-between">
          <button className="bg-[#6A52FD] text-white py-[16.5px] rounded-lg lg:px-[76px] px-[76px] mt-[36px]">
            Request
          </button>
          <button onClick={onClose} className="text-[#6A52FD] border-2 border-[#6A52FD] py-[16.5px] rounded-lg lg:px-[80.5px] px-[80.5px] mt-[36px]">
            Cancel
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default RequestTokenModal