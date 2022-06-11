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
    <div className="bg-[#F6F4FF] pb-40">
      <Navbar />
      <div className="pt-24">
        <img src={Contactus} alt="bg-contact" className="bg-center w-full" />
      </div>

      <div className="w-[1180px]  m-auto mt-20 p-28  bg-white ">
        <h3 className="text-sectionFont ">Want to reach out?</h3>
        <h3 className="text-sectionFont ">Send a message...</h3>
        <form onSubmit={submit} className="m-auto mt-16">
          <label htmlFor="name" className="">
            <p className="text-base">Full Name</p>
            <input
              type="text"
              {...register("firstName", { required: true })}
              placeholder="Enter Full Name"
              className="w-[961px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>
          <label htmlFor="" className="mb-6">
            <p className="text-base">Email Address</p>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Email Address"
              className="w-[961px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>
          <label htmlFor="" className="mb-6">
            <p className="text-base">Phone Number</p>
            <input
              type="number"
              {...register("phoneNumber")}
              placeholder="Enter Phone Number"
              className="w-[961px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>

          <label htmlFor="mb-6">
            <p className="text-base ">Message</p>
            <textarea
              {...register("message", { required: true })}
              placeholder="Enter Message"
              className="w-[961px] h-[177px] p-4 border bg-[#F6F4FF] mb-12"
            />
          </label>

          <p>{data}</p>
          <input
            type="submit"
            className="pl-5 py-2 border w-[961px] bg-blue-500 text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
