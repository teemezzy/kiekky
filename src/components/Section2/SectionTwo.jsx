import React from "react";
import { contactIcon2, profileDetails } from "../../assets";

const SectionTwo = () => {
  return (
    <div className="mx-5 xl:mx-32 lg:mb-28 mb-7">
      <div>
        <h3
          className="text-center font-semibold
 text-heroPXLFont lg:text-sectionFont"
        >
          How It Works
        </h3>
        <p className="flex flex-col text-center pt-3.5 font-normal text-base mx-6 lg:w-wText lg:m-auto text-[#828282]">
          <span> Your experience here is of the ultimate priority.</span>
          <span>
            Kiekky has decided to make it a simple yet memorable one for you.
          </span>
        </p>
      </div>

      <div className="lg:flex lg:justify-around lg:items-center mt-14 flex-col lg:flex-row justify-center justify-items-center">
        <div className=" lg:flex flex flex-col">
          <img src={profileDetails} alt="profileDetails" className='w-64 m-auto' />
        </div>

        <div className="lg:flex lg:flex-row flex flex-col">
          <div className="lg:mx-7 lg:my-0 lg:mt-0  mt-4 my-2 m-auto">
            <img src={contactIcon2} alt="contact" />
          </div>
          <div className="lg:w-heroMobileWidth">
            <h3 className="flex lg:items-center font-medium text-homeProfileFont lg:flex-row flex-col justify-center lg:text-left text-center lg:w-64 w-80">
              Set up profile details
            </h3>
            <p className="text-[#828282] text-center lg:text-left lg:w-full w-80 ">
              Our community is filled with unique individuals such as yourself.
              Therefore, the need for you to provide necessary information about
              yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
