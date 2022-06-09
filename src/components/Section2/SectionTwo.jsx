import React from "react";
import {contactIcon2, profileDetails} from '../../assets'

const SectionTwo = () => {
  return (
    <div className='mx-5 xl:mx-32 mb-44'>
      <div>
        <h3
          className="text-center font-bold
 text-heroPXLFont lg:text-sectionFont"
        >
          How It Works
        </h3>
        <p className="flex flex-col text-center pt-3.5 font-normal text-base mx-6 lg:w-wText lg:m-auto">
          <span> Your experience here is of the ultimate priority.</span>
          <span>
            Kiekky has decided to make it a simple yet memorable one for you.
          </span>
        </p>
      </div>

      <div className='lg:flex block lg:items-center xl:justify-between m-auto mt-14'>
        <div className=''>
          <img src={profileDetails} alt="" />
        </div>

        <div>
          <div className='lg:flex block '>
            <img src={contactIcon2} alt='contact'/>
            <h3 className='flex items-center font-bold text-homeProfileFont'>Set up profile details</h3>
          </div>
          <p className='w-1/2'>
            Our community is filled with unique individuals such as yourself.
            Therefore, the need for you to provide neccessary information about
            yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
