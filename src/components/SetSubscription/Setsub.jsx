import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Setsub = ({ visible, onClose }) => {
  return (
    <div
      div
      className="lg:w-[699px] w-[384px] border-2 lg:h-[575px] h-[480px] mt-[150px] lg:ml-[700px] m-auto fixed inset-0 bg-opacity-80 backdrop-blur-3xl bg-white flex flex-col justify-center items-center"
    >
      <div className="lg:w-[984px] w-[347px] m-auto lg:h-[684px] h-[800px] bg-white">
        <div
          className="absolute m-auto top-0 right-0 p-10 text-[#BDBDBD]"
          onClick={onClose}
        >
          <BiArrowBack />
        </div>
        <div className="lg:w-[903px] w-[300px] m-auto">
          <h2 className="text-[18px] font-semibold pt-[39px] mb-[12px]">
            Set the price for your subscriptions
          </h2>
          <p className="text-[#828282]">
            Offer a subscription and your subscribers can view your photos and
            videos for a set price. You can also offer several months as a
            package or a discounted subscription to attract new subscribers or
            to win back old subscribers. Buyers pay you on a monthly basis and
            get access to all published content. Important: Subscribers expect
            you to post high quality photos and videos on a regular basis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setsub;
