import React from "react";
import { Link } from "react-router-dom";

const SetSubscription = () => {
  return (
    <div className="lg:w-[984px] w-[347px] m-auto lg:h-[684px] h-[800px] bg-white">
      <div className="lg:w-[903px] w-[300px] m-auto">
        <h2 className="text-[18px] font-semibold pt-[39px] mb-[12px]">
          Set the price for your subscriptions
        </h2>
        <p className="text-[#828282]">
          Offer a subscription and your subscribers can view your photos and
          videos for a set price. You can also offer several months as a package
          or a discounted subscription to attract new subscribers or to win back
          old subscribers. Buyers pay you on a monthly basis and get access to
          all published content. Important: Subscribers expect you to post high
          quality photos and videos on a regular basis.
        </p>
      </div>

      <Link to ='/' className="bg-[#FFF0EF] inner-content rounded-md px-[35px] pb-[33px] pt-[31px] mt-[45px] lg:w-[903px] w-[300px] m-auto">
        <h2 className="text-[#EF3D39] mb-[14px]">Upgrade your account</h2>
        <p className="text-[#828282]">
          Please be aware that you can only enable subscriptions if you have a
          verified profile and bank connection. We will check your information
          and send you a confirmation email as soon as this process has been
          completed.
        </p>
        <button className="bg-[#EB5757] mt-[24px] text-white py-[8.5px] rounded-md px-[45.5px]">
          Upgrade
        </button>
      </Link>
    </div>
  );
};

export default SetSubscription;
