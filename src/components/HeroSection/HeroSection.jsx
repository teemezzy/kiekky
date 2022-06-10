import React from "react";
import "./HeroSection.css";
import { Frame1, HeroFrame1 } from "../../assets/";
import CustomButton from "../../container/CustomButton";

const HeroSection = () => {
  return (
    <div className="HeroSection ">
      <div className="lg:pt-56  pt-32 mx-5 xl:mx-32 ">
        <div className="xl:flex justify-between">
          <div>
            <div className="">
              <h2 className="font-semibold w-full lg:w-75 lg:text-heroXLFont text-heroMobileFont h-full">
                Find New Friends, Dates,
                <div className="flex lg:block">
                  <p className="lg: block">Models or People</p>
                  <p className=" lg:w-1/2 ">Next Door.</p>
                </div>
              </h2>
            </div>
            <p className=" font-normal text-[#828282] lg:w-heroPWidth w-11/12 md:w-1/2 lg:text-heroPXLFont text-heroPMobileFont mt-9 mb-14">
              Kiekky is a one stop platform to meet new people, Share your photo{" "}
              {`${"&"}`} Videos, go on a paid date.
            </p>
            <CustomButton
              className="sm:mb-36 mb-0"
              buttonDetails="Get Started ⇾"
            />
          </div>

          <div className="img-anime m-auto lg:pt-0 pt-20 mt-28 lg:m-0 bg-contain xl:w-wHero xl:h-hHero w-wHeroMobile h-hHeroMobile">
            {/* <img src={HeroFrame1} alt="" />  */}
          </div>
        </div>

        <div className="flex m-auto justify-center">
          <img src={Frame1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
