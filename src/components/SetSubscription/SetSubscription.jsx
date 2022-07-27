import React, { useState } from "react";
import Setsub from "./Setsub";
import { MdOutlineArrowBack } from "react-icons/md";

const SetSubscription = () => {
  const [work, setWork] = useState(false);

  const textcli = () => {
    if (work === false) {
      setWork(true);
    } else {
      setWork(false);
    }
  };

  const tt = () => {
    if (work === true) {
      setWork(false)
    }
  }

  
  return (
    <>
      {!work && (
        <div className="lg:w-[984px] w-[347px] m-auto lg:h-[684px] h-[800px] bg-white">
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

          <div className="bg-[#FFF0EF] inner-content rounded-md px-[35px] pb-[33px] pt-[31px] mt-[45px] lg:w-[903px] w-[300px] m-auto">
            <h2 className="text-[#EF3D39] mb-[14px]">Upgrade your account</h2>
            <p className="text-[#828282]">
              Please be aware that you can only enable subscriptions if you have
              a verified profile and bank connection. We will check your
              information and send you a confirmation email as soon as this
              process has been completed.
            </p>
            <button
              onClick={textcli}
              className="bg-[#EB5757] text-[14px] mt-[24px] text-white py-[8.5px] rounded-md px-[45.5px]"
            >
              Upgrade {work}
            </button>
          </div>
        </div>
      )}

      {work && (
        <div className="lg:w-[984px] w-[347px] m-auto lg:h-[684px] pt-[39px] h-[800px] bg-white">
          <div className="m-auto px-10 text-[#000000] " onClick={tt}>
            <MdOutlineArrowBack  />
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
      )}
    </>
  );
};

export default SetSubscription;
