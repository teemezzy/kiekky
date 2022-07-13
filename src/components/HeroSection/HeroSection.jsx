import React from "react";
import "./HeroSection.css";
import { heroVid, Frame1 } from "../../assets/";
import CustomRegister from "../../container/CustomButton";

const HeroSection = () => {
  return (
    <div className="HeroSection lg:bg-auto bg-contain ">
      <div className="lg:pt-32  pt-32 mx-5 xl:mx-32 ">
        <div className="xl:flex justify-between">
          <div>
            <div className="">
              <h2 className="font-semibold w-full lg:w-75 lg:text-heroXLFont text-heroMobileFont h-full">
                Find New Friends, Dates,
                <div className="flex lg:block">
                  <p className="lg: block w-">Models or People</p>
                  <p className=" lg:w-1/2 lg:pl-0 pl-1 ">Next Door.</p>
                </div>
              </h2>
            </div>
            <p className=" font-normal text-[#828282] lg:w-heroPWidth w-11/12 md:w-1/2 lg:text-heroPXLFont text-heroPMobileFont mt-9 mb-14">
              Kiekky is a one stop platform to meet new people, Share your photo {`${"&"}`} Videos, go on a paid date.
            </p>
            <CustomRegister
              className="sm:mb-36 mb-0"
              buttonDetails="Get Started ⇾"
            />
          </div>

          <div className="m-auto lg:pt-0 pt-20 lg:m-0 bg-contain xl:w-wHero xl:h-hHero w-wHeroMobile h-hHeroMobile">
            <video src= {heroVid}  autoPlay loop muted playsInline />
          </div>
        </div>

        <div className="flex m-auto justify-center lg:mt-16 mt-28">
          <img src={Frame1} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
