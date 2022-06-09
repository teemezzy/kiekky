import React from "react";
import { Contactus } from "../assets";
import { Navbar } from "../components";

const Contact = () => {
  return (
    <div>
      <Navbar className='' />
      <div className='pt-24'>
        <img src={Contactus} alt="bg-contact" className="bg-center w-full" />
      </div>
    </div>
  );
};

export default Contact;
