import React from "react";
import { LogoFooter, Submit } from "../../assets";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className=" px-5 pt-[2rem] md:p-[6rem] bg-[#1B1158] text-white divide-y divide-opacity-10  divide-gray-300">
        <div className="Top-footer md:flex md:justify-between md:items-center mb-[2rem] ">
          <img src={LogoFooter} alt="logo_white" />
          <div className=" mt-10 md:mt-0 text-2xl md:flex md:items-center">
            <p>Ready to get started?</p>
            <button className="mt-5 text-[#6A52FD] bg-white text-xs py-3 px-9 md:mx-2 rounded-md">
              Register
            </button>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center pt-[1.5rem]">
          <div>
            <h1 className=" mb-5 md:mb-10 text-2xl">
              Subscribe to our <br /> newsletter
            </h1>
            <form className="flex">
              <input
                className="w-[13rem] bg-transparent pb-4 border-b border-opacity-10 border-b-[#ECECEC] "
                placeholder="Email address"
                type="email"
              />
              <button>
                <img src={Submit} alt="btn-submit" />
              </button>
            </form>
          </div>

          <div className="mt-10">
            <p>About</p>
            <p>Home</p>
            <p>Terms {`${"&"}`} Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="mt-10">
            <p>Help</p>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
          <div className="mt-10 pb-[3rem]">
            <p>Follow Us</p>
            <div className="flex pt-5">
              <span className="">
                <FaFacebookF />
              </span>
              <span className="pl-8">
                {" "}
                <FaInstagram />
              </span>
              <span className="pl-8">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
