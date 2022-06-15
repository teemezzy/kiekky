import React, { useState, useEffect } from "react";
import { Faq } from "../assets";
import { data } from "./data";
import { Navbar } from "../components";

const Faqs = () => {
  const [active, setActive] = useState(false);
  const handleClick = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  useEffect(() => {
    document.title ="FAQs | Kiekky"
  }, [])
  

  return (
    <div className="bg-[#FCFCFC]">
      <Navbar />
      <div className="mt-24">
        <img src={Faq} alt="faq-img" className="w-full bg-center" />
      </div>
      <div className="mt-[6.5rem]  lg:w-[62rem] w-[300px] flex flex-col m-auto ">
        {data.map((data, index) => (
          <div className=" ">
            <div
              className="flex justify-between my-3 bg-white p-[1.5rem] m-auto "
              onClick={() => handleClick(index)}
              key={index}
            >
              <div className="">{data.title}</div>
              <span>
                {active === index ? (
                  <div>{data.iconn}</div>
                ) : (
                  <div>{data.icon}</div>
                )}
              </span>
            </div>
            <div className=" w-full">
              {active === index ? (
                <div className="bg-[#F6F4FF] p-[1.8rem]">{data.body}</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
