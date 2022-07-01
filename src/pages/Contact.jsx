import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Contactus } from "../assets";
import { Navbar,Footer } from "../components";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const submit = handleSubmit((data) => setData(data));

  useEffect(() => {
    document.title = "Contact Us | Kiekky";

    const data = {
      full_name: "",
      phone_no: "",
      email: "",
      message: "",
    };

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("https://api.kiekky.com/users/contact", config)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((contact) => setData(contact))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[#F6F4FF] lg:pb-40 pb-12 ">
      <Navbar />
      <div className="pt-24">
        <img src={Contactus} alt="bg-contact" className="bg-center w-full" />
      </div>

      <div className="lg:w-[1180px] w-[322px] m-auto lg:mt-20 mt-12 lg:p-28 p-6 bg-white ">
        <h3 className="lg:text-sectionFont text-[20px] font-semibold ">
          Want to reach out?
        </h3>
        <h3 className="lg:text-sectionFont text-[20px] mb-8 font-semibold">
          Send a message...
        </h3>
        <form method="POST" onSubmit={submit} className="m-auto lg:mt-16">
          <label htmlFor="fullname" className="">
            <p className="text-base mb-1">Full Name</p>
            <input
              type="text"
              {...register("full_name", { required: true })}
              placeholder="Enter Full Name"
              className="lg:w-[961px] w-[269px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>
          <label htmlFor="email" className="mb-6">
            <p className="text-base  mb-1">Email Address</p>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Email Address"
              className="lg:w-[961px] w-[269px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>
          <label htmlFor="phone_no" className="mb-6">
            <p className="text-base  mb-1">Phone Number</p>
            <input
              type="tel"
              {...register("phoneNumber")}
              placeholder="Enter Phone Number"
              className="lg:w-[961px] w-[269px] pl-5 py-2 border bg-[#F6F4FF] mb-6"
            />
          </label>

          <label htmlFor="text">
            <p className="text-base  mb-1">Message</p>
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
      <Footer />

    </div>
  );
};

export default Contact;
