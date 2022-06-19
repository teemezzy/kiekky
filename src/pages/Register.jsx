import React, { useEffect } from "react";
import { bgLogin } from "../assets";
import { Link } from "react-router-dom";
import { MidNav } from "../components";
import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";
import { country } from "./data";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // Set Page Title
  useEffect(() => {
    document.title = "Register | Kiekky";
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000")
  //   console.log(statesData)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((city) => {
  //       setStatesData(city);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div>
      <div className="flex">
        <MidNav className="lg:hidden block" />
        <div className="">
          <img
            src={bgLogin}
            alt="bg-hero-signup"
            className=" bg-center w-[684px] lg:block hidden"
          />
        </div>

        <div className="relative m-auto rounded-lg w-[29rem] lg:mt-[50px] mt-[150px] lg:px-0 px-[24px]">
          <h3 className="text-4xl">Get Started</h3>
          <p className="mb-9">Please enter the details to create an account</p>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="flex flex-col mb-4">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                placeholder="FirstName and LastName"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && <p className="text-red-600 text-sm">Fullname is required</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                placeholder="Username"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
                {...register("username", { required: true })}
              />
              {errors.username && <p className="text-red-600 text-sm">Username is required</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-600 text-sm">Email is required</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email">Phone Number:</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
                {...register("phonenumber", { required: true })}
                
              />
              {errors.phonenumber && <p className="text-red-600 text-sm">Phone Number is required</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="">Country:</label>
              <select
                {...register("country")}
                defaultValue= "country"
                name="country"
                id="country"
                className="border-2 bg-[#F6F4FF] py-2 pl-4 w-full"
              >
                <option
                  selected
                  disabled
                  className="text-gray-400"
                  placeholder="Select Country"
                >
                  Select Country
                </option>
                {country.map((country) => (
                  <option
                    value={country.name}
                    className="bg-[#F6F4FF] py-2 pl-4  break-all break-words"
                    key={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && <p className="text-red-600 text-sm">Country is needed</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="">City:</label>

              <select
                {...register("city")}
                defaultValue="city"
                name="city"
                id="city"
                className="border-2 bg-[#F6F4FF] py-2 pl-4 w-full"
              >
                <option selected disabled>
                  Select City
                </option>
                <option value="city">Abia</option>
                <option value="city">Adamawa</option>
                <option value="city">Akwa Ibom</option>
                <option value="city">Anambra</option>
                <option value="city">Bauchi</option>
                <option value="city">Benue</option>
                <option value="city">Borno</option>
                <option value="city">Cross River</option>
                <option value="city">Delta</option>
                <option value="city">Edo</option>
                <option value="city">Enugu</option>
                <option value="city">Imo</option>
                <option value="city">Jigawa</option>
                <option value="city">Kaduna</option>
                <option value="city">Katsina</option>
                <option value="city">Kano</option>
                <option value="city">Kebbi</option>
                <option value="city">Kogi</option>
                <option value="city">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="city">Niger</option>
              </select>
              {errors.city && <p className="text-red-600 text-sm">City is needed</p>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="">Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-600 text-sm">Password is required</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="">Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
                {...register("password", { required: true })}
              />
              
            </div>

            <div className="">
              <input
                type="checkbox"
                {...register("checked", { required: true })}
              />
              <label className="pl-2 text-[13px]">
                I guarantee that I am 18 years and above.
              </label>
            </div>

            <div className="">
              <input
                type="checkbox"
                {...register("checked", { required: true })}
              />
              <label className="pl-2 text-[13px]">
                I have read and accept the privacy policy and the general terms
                and conditions.
              </label>
            </div>

            <input
              type="submit"
              value="Continue"
              className="border-2 mt-5 w-full bg-[#6A52FD] py-2 pl-4 rounded-xl text-white"
            />
            <p className="my-4">
              Already have an account?{" "}
              <Link className="text-[#6A52FD]" to="/login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
