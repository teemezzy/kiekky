import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Contactus } from "../assets";
import { Navbar } from "../components";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const submit = handleSubmit((data) => setData(JSON.stringify(data)));

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="bg-[#F6F4FF] pb-40 ">
      <Navbar />
      <div className="pt-24">
        <img src={Contactus} alt="bg-contact" className="bg-center w-full" />
      </div>

      <div
        className="lg:w-[1180px] w-[322px] m-auto lg:mt-20 mt-12 lg:p-28 p-6  bg-white "
      >
        <h3 className="text-sectionFont ">Want to reach out?</h3>
        <h3 className="text-sectionFont ">Send a message...</h3>
        <form onSubmit={submit} className="m-auto lg:mt-16">
          <label htmlFor="fullname" className="">
            <p className="text-base">Full Name</p>
            <input
              type="text"
              {...register("firstName", { required: true })}
              placeholder="Enter Full Name"
              className="lg:w-[961px] w-[269px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>
          <label htmlFor="email" className="mb-6">
            <p className="text-base">Email Address</p>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Email Address"
              className="lg:w-[961px] w-[269px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>
          <label htmlFor="phoneNumber" className="mb-6">
            <p className="text-base">Phone Number</p>
            <input
              type="number"
              {...register("phoneNumber")}
              placeholder="Enter Phone Number"
              className="lg:w-[961px] w-[269px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>

          <label htmlFor="text">
            <p className="text-base ">Message</p>
            <textarea
              {...register("message", { required: true })}
              placeholder="Enter Message"
              className="lg:w-[961px] h-[177px] p-4 border w-[269px] bg-[#F6F4FF] mb-12"
            />
          </label>

          <p>{data}</p>
          <input
            type="submit"
            className="pl-5 py-2 border w-[269px] lg:w-[961px] bg-blue-500 text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
