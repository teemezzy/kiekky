import React, { useEffect, useState, useRef } from "react";
import { bgLogin } from "../assets";
import { Link } from "react-router-dom";
import { MidNav } from "../components";
// import { statesandlocals } from "./statesandlocals";

const USER_REGEX = /^[A-z][A-z0-9-_]{4,26}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [stateData, setStateData] = useState(true);

  // Set Page Title
  useEffect(() => {
    document.title = "Register | Kiekky";
  }, []);

  // Setting Focus When Component Loads
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  //
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    fetch("http://localhost:8000/countries")
      .then((response) => {
        return response.json();
      })
      .then((statesandlocals) => {
        setStateData(statesandlocals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          <form action="" className="">
            <div className="flex flex-col mb-4">
              <label htmlFor="full_name">Full Name:</label>
              <input
                type="text"
                placeholder="FirstName and LastName"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                placeholder="Username"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Email"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email">Phone Number:</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="">Country:</label>
              <select
                defaultValue="Select Country"
                name="country"
                id="country"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              >
                <option selected disabled>
                  Select Country
                </option>
                <option value="Nigeria">Nigeria</option>
                <option value="">Ireland</option>
                <option value="">United States</option>
                <option value="city">United Kingdom</option>
                <option value="city">China</option>
                <option value="city">Ghana</option>
                <option value="city">Togo</option>
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="">City:</label>
              <select
                defaultValue="Select City"
                name="city"
                id="city"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              >
                <option selected disabled>
                  Select City
                </option>
                <option value="Nigeria">Nigeria</option>
                <option value="">Ireland</option>
                <option value="">United States</option>
                <option value="city">United Kingdom</option>
                <option value="city">China</option>
                <option value="city">Ghana</option>
                <option value="city">Togo</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="">Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="border-2 bg-[#F6F4FF] py-2 pl-4"
              />
            </div>

            <div className="">
              <input type="checkbox" />
              <label className="pl-2 text-[13px]">
                I guarantee that I am 18 years and above.
              </label>
            </div>

            <div className="">
              <input type="checkbox" />
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
