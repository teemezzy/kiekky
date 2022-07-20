import React from "react";

const Notifications = () => {
  return (
    <div className="lg:h-[456px] h-[400px] lg:w-[984px] w-[347px] m-auto bg-white px-[55px] ">
      <p className="text-[#828282] text-[15px] font-extralight mb-[61px] pt-[56px]">
        You can turn on and off your notification settings
      </p>

      <div className=" flex justify-between mb-[57px] border-b-2 border-[#f2f2f2] lg:w-[874px] pb-[24px]">
        <p>Email Notification</p>
        <label
          htmlFor="email-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="email-toggle"
            className="sr-only peer"
          />
          <div className="w-[40px] h-[1.2rem] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#A8A8A8] peer-checked:after:translate-x-[1rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          
        </label>
      </div>

      <div className=" flex justify-between border-b-2 pb-[24px] lg:w-[874px] border-[#f2f2f2]">
        <p>System Notification</p>
        <label
          htmlFor="system-toggle"
          className="inline-flex relative items-center mb-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="system-toggle"
            className="sr-only peer"
          />
          <div className="w-[40px] h-[1.2rem] bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[#A8A8A8] peer-checked:after:translate-x-[1rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          
        </label>
      </div>
    </div>
  );
};

export default Notifications;
