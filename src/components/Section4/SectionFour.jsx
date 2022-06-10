import React from "react";
import { Form, Contact } from "../../assets";

const SectionFour = () => {
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row  lg:items-center lg:justify-center ">
        <img src={Form} alt="form" className=" lg:mb-5 mx-[6rem] md:mx-auto md:w-1/2 lg:w-5/12" />
        <div className="lg:flex lg:w-4/12 ">
          <img
            src={Contact}
            alt="contact"
            className="mb-4 mx-auto md:h-[3rem]  lg:mx-6"
          />

          <div className="  lg:mx-0 text-center lg:text-left mx-5">
            <h1 className="font-medium text-homeProfileFont"> Go On Date </h1>
            <p className="text-gray-400">
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
