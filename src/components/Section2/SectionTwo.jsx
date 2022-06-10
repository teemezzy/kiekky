import React from "react";
import { contactIcon2, profileDetails } from "../../assets";

const SectionTwo = () => {
  return (
    <div className="mx-5 xl:mx-32 mb-28">
      <div>
        <h3
          className="text-center font-bold
 text-heroPXLFont lg:text-sectionFont"
        >
          How It Works
        </h3>
        <p className="flex flex-col text-center pt-3.5 font-normal text-base mx-6 lg:w-wText lg:m-auto text-gray-400">
          <span> Your experience here is of the ultimate priority.</span>
          <span>
            Kiekky has decided to make it a simple yet memorable one for you.
          </span>
        </p>
      </div>

      <div className="lg:flex lg:justify-around lg:items-center mt-14">
        <div className="">
          <img src={profileDetails} alt="" />
        </div>

        <div className="lg:flex">
          <div className="mx-7">
            <img src={contactIcon2} alt="contact" />
          </div>
          <div className="w-heroMobileWidth">
            <h3 className="flex items-center font-medium text-homeProfileFont">
              Set up profile details
            </h3>
            <p className="text-gray-400 ">
              Our community is filled with unique individuals such as yourself.
              Therefore, the need for you to provide necessary information
              about yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
