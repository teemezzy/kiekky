import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getSubid, reset } from "../../Redux/features/subscriptioncat/subscribeSlice";

const SubModal = ({ visible, onClose }) => {
  // const dispatch = useDispatch();
  // const { subscribe, isError, isSuccess, message } = useSelector(
  //   (state) => state.subscribe
  // );

  // useEffect(
  //   (id) => {
  //     if (isError) {
  //       toast.error(message);
  //     }
  //     if (isSuccess) {
  //       dispatch(getSubid(id));
  //     }
     
  //   },
  //   [subscribe, isError, message, dispatch]
  // );

  // const formdata = new FormData();
  // formdata.append("sub_id", subscribe.sub_id);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (isSuccess) {
  //     dispatch(getSubid(formdata));

  //   }
  // }

  if (!visible) return null;
  return (
    <div className="backdrop-blur-md bg-black bg-opacity-25 z-20 inset-0 fixed m-auto">
      <div className="lg:w-[498px] w-[300px] rounded-lg lg:h-[364px] h-[264px] mt-[250px] m-auto bg-white flex flex-col justify-center items-center relative">
        <div className="bg-white ">
          <div
            onClick={onClose}
            className="absolute m-auto top-0 right-0 p-10 text-[#BDBDBD]"
          >
            <MdClose />
          </div>
          <div className="lg:w-[270px] w-[170px] m-auto">
            <h2 className="lg:text-[24px] text-[18px] text-center">
              You are about to subscribe to this plan
            </h2>
          </div>

          <div className="flex lg:w-[424px] w-[224px] justify-between m-auto">
            <button
              onClick={onClose}
              className="text-[#6A52FD] border-2 border-[#6A52FD]  lg:py-[17.5px] py-[14px] lg:px-[64px] px-[30px] lg:text-[16px] text-[12px] rounded-lg mt-[36px]"
            >
              Go Back
            </button>
              
            <button
              className="bg-[#6A52FD] text-white lg:py-[17.5px] py-[14px] lg:px-[64px] px-[30px]  rounded-lg lg:text-[16px] text-[12px] mt-[36px]"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubModal;
