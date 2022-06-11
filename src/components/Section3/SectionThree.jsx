import React from "react";
import explore from "../../assets/explore.png";
import contact from "../../assets/contactIcon.png";
// import { section3 } from "../../assets";
import "./SectionThree.css";
const SectionThree = () => {
  return (
    <div className="  text-center lg:text-left lg:justify-center lg:items-center lg:flex lg:bg-white bg-[#E5E5E5]">
      <div className="lg:flex lg:w-5/12 mx-5 ">
        <img
          src={contact}
          alt="contact "
          className=" mb-3 mx-auto lg:h-[3rem]  lg:mx-6"
        />
        <div className=" ">
          <h1 className=" font-medium text-homeProfileFont">
            Explore Our Community
          </h1>
          <p className=" text-gray-400">
            You explore our community to meet people and create connections that
            will become something magical to say the least. This feature allows
            you to meet people and choose those you want to meet.
          </p>
        </div>
      </div>

      <div className="image-crossfade ">
        <img
          src={explore}
          alt=" "
          className="top mx-auto mt-5 lg:ml-[3rem] lg:5/12 "
        />
        {/* <img src={section3} alt=" " className="bottom" /> */}
      </div>
    </div>
  );
};

export default SectionThree;
