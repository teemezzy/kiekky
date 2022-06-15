import React from "react";
import { Form, Contact, dateVid } from "../../assets";


const SectionFour = () => {
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row lg:mr-[2rem] lg:items-center lg:justify-center bg-white  ">
      <video 
          autoPlay muted loop
          className=" lg:mb-5 mx-[4rem] lg:mx-0 md:mx-auto md:w-1/2 lg:w-[40rem]" 
          src={dateVid}/>
        {/* <img src={Form} alt="form" className=" lg:mb-5 mx-[4rem] md:mx-auto md:w-1/2 lg:w-5/12" /> */}
        <div className="lg:flex lg:w-4/12 ">
          <img
            src={Contact}
            alt="contact"
            className="mb-4 mx-auto md:h-[3rem]  lg:mx-3"
          />

         

          <div className=" text-center lg:text-left mx-5 lg:w-[21rem] ">
            <h1 className="font-medium text-homeProfileFont"> Go On Date </h1>
            <p className="text-[#828282]">
              Our platform allows you to post a date request to know people that
              might be interested in going for drink, dinner or downtown. You
              can talk more on the details in the chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
