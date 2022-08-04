import React, { useEffect, useState } from "react";
import { bgLogin } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { LoginNav } from "../components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { regUser, reset } from "../Redux/features/authSlice";
import {
  country,
  city,
  states,
} from "../Redux/features/userLocation/locationSlice";
import { toast } from "react-toastify";
import { BiArrowBack } from "react-icons/bi";
import Spinner from "../container/Spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  // Handle Form Event
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Form Submit and Password check
  const onSubmit = (data) => {
    if (data.password !== data.confirmpassword) {
      toast.error("Password mismatch");
    } else {
      const userdata = {
        full_name: data.full_name,
        email: data.email,
        username: data.username,
        phone: data.phone,
        password: data.password,
        country_id: data.country,
        city_id: data.city,
        state_id: data.state,
      };
      dispatch(regUser(userdata));
    }
  };

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth);

  const { location, statedata, citydata } = useSelector(
    (state) => state.location
  );

  let SelectedState;
  let selectedCity;
  if (statedata) {
    SelectedState = statedata.states;
  }

  if (citydata) {
    selectedCity = citydata.cities;
  }

  // Navigate to OTP page || If user exist navigate to home
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/otp");
    }
    if (user) {
      navigate("/otp");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  // Set Page Title
  useEffect(() => {
    document.title = "Register | Kiekky";
  }, []);

  // GET City and Country
  const handleCountry = (e) => {
    const id = e.target.value;
    console.log(id);
    if (id) {
      dispatch(states(id));
    }
  };

  const handleStates = (e) => {
    const id = e.target.value;
    if (id) {
      console.log(`${id}cities`);
      dispatch(city(id));
    }
  };

  useEffect((id) => {
      if (isError) {
        toast.error(message);
      }
      dispatch(country(id));
    },
    [isError, message, dispatch]
  );

  if (isLoading) {
    return <Spinner />;
  }

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className="">
      <div className="flex ">
        <LoginNav />
        <div className="z-50 relative">
          <img
            src={bgLogin}
            alt="bg-hero-signup"
            className=" bg-center w-[684px] sticky lg:block hidden"
          />
        </div>

        <div className="rounded-lg lg:w-[464px] w-[362px] m-auto lg:mt-[40px] mt-[140px]">
          <div className=" mb-14 lg:-translate-x-16 text-2xl w-7 h-0">
            <Link to="/">
              <BiArrowBack />
            </Link>
            {loading}
          </div>

          <h3 className="text-2xl lg:w-[464px] w-[347px] m-auto text-[#121212]">
            Get Started
          </h3>
          <p className="mb-6 text-[#666666] text-[14px] lg:w-[464px] w-[347px] m-auto">
            Please enter the details to create an account
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-[464px] w-[347px] m-auto"
          >
            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="full_name" className="text-[15px]">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Enter Firstname and Lastname (Surname)"
                className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-[#6A52FD] ${
                  errors.full_name &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                }`}
                {...register("full_name", {
                  required: true,
                  pattern: {
                    value: /[A-Za-z]/,
                    message:
                      "Sorry this CodeSandbox can only handle names with characters",
                  },
                })}
              />
              {errors.full_name && (
                <p className="text-red-600 text-xs">Full Name is required</p>
              )}
            </div>

            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="username" className="text-[15px]">
                Username:
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-[#6A52FD] ${
                  errors.username &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                }`}
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="text-red-600 text-xs">Username is required</p>
              )}
            </div>

            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="email" className="text-[15px]">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className={`bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-[#6A52FD] ${
                  errors.email &&
                  "focus:border-red-600 focus:ring-red-600 outline-none border-red-600 border-2"
                }`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600 text-xs">Email is required</p>
              )}
            </div>

            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="phone" className="text-[15px]">
                Phone Number:
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-[#6A52FD] ${
                  errors.phone &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                }`}
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs">Phone Number is required</p>
              )}
            </div>

            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="" className="text-[15px]">
                Country:
              </label>
              <select
                {...register("country", { required: true })}
                defaultValue={country.id}
                name="country"
                onChange={(e) => handleCountry(e)}
                id="country"
                className={` bg-[#F6F4FF] h-[46px] outline-none rounded-lg px-4 w-full ${
                  errors.country &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                }`}
              >
                <option
                  value={"default"}
                  disabled
                  className="text-[13px] py-2 outline-none px-4"
                >
                  Select Country
                </option>

                {location.map((country) => (
                  <option
                    key={country.id}
                    value={country.id}
                    className={`bg-[#F6F4FF] py-2 px-4 ${
                      errors.password &&
                      "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                    }`}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-600 text-xs ">Country is needed</p>
              )}
            </div>
            {/* States */}
            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px]  m-auto">
              <label htmlFor="" className="text-[15px]">
                State:
              </label>

              <select
                {...register("state")}
                defaultValue={"default"}
                onChange={(e) => handleStates(e)}
                name="state"
                id="state"
                className=" bg-[#F6F4FF] h-[46px] outline-none rounded-lg px-4 w-full"
              >
                <option
                  value={"default"}
                  placeholder="Select State"
                  disabled
                  className={` bg-[#F6F4FF] py-2 px-4 ${
                    errors.state &&
                    "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                  }`}
                >
                  Select State
                </option>

                {statedata &&
                  SelectedState.map((state) => (
                    <option
                      key={state.id}
                      value={state.id}
                      className={`bg-[#F6F4FF] py-2 px-4 ${
                        errors.password &&
                        "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                      }`}
                    >
                      {state.name}
                    </option>
                  ))}
              </select>
              {errors.state && (
                <p className="text-red-600 text-xs">State is needed</p>
              )}
            </div>

            {/* Cities */}
            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="" className="text-[15px]">
                City:
              </label>

              <select
                {...register("city")}
                defaultValue={"default"}
                // onChange= {(e)=> handleCity(e)}
                name="city"
                id="city"
                className=" bg-[#F6F4FF] h-[46px] rounded-lg px-4 w-full"
              >
                <option
                  value={"default"}
                  placeholder="Select City"
                  disabled
                  className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-none ${
                    errors.password &&
                    "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                  }`}
                >
                  Select City
                </option>

                {citydata &&
                  selectedCity.map((city) => (
                    <option
                      key={city.id}
                      value={city.id}
                      className={`bg-[#F6F4FF] py-2 px-4 outline-none ${
                        errors.password &&
                        "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                      }`}
                    >
                      {city.name}
                    </option>
                  ))}
              </select>
              {errors.city && (
                <p className="text-red-600 text-xs">City is needed</p>
              )}
            </div>

            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="" className="text-[15px]">
                Password:
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-[#6A52FD] ${
                  errors.password &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-4 lg:w-[464px] w-[347px] m-auto">
              <label htmlFor="" className="text-[15px]">
                Confirm Password:
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className={` bg-[#F6F4FF] focus:border-[#6A52FD] h-[46px] rounded-lg px-4 outline-[#6A52FD] ${
                  errors.confirmpassword &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
                }`}
                {...register("confirmpassword", {
                  required: "Password mismatch",
                })}
              />

              {errors.confirmpassword && (
                <p className="text-red-600 text-xs">
                  {errors.confirmpassword.message}
                </p>
              )}
            </div>

            <div className="lg:w-[464px] w-[347px] m-auto">
              <input
                type="checkbox"
                {...register("checked", { required: true })}
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 accent-[#6A52FD] ${
                  errors.checkbox &&
                  "focus:outline-red-600 focus:ring-red-600 border-red-600 "
                }`}
              />
              {errors.checkbox && (
                <p className="text-red-600 text-xs">{errors.checkbox}</p>
              )}
              <label
                className={`pl-2 text-[13px] text-[#666666] ${
                  errors.checkbox && "focus:text-red-600"
                }`}
              >
                I guarantee that I am 18 years and above.
              </label>
            </div>
            <div className="lg:w-[464px] w-[347px] m-auto">
              <input
                type="checkbox"
                {...register("checked", { required: true })}
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 accent-[#6A52FD] ${
                  errors.checkbox &&
                  "focus:border-red-600/100 focus:ring-red-600 border-red-600 border-2"
                }`}
              />
              <label
                className={`pl-2 text-[13px] text-[#666666] lg:w-[408px] ${
                  errors.checkbox && "focus:text-red-600"
                }`}
              >
                I have read and accept the privacy policy and the general terms
                and conditions.
              </label>
            </div>

            <div>
              <input
                type="submit"
                value="Continue"
                className=" mt-5 w-full  bg-[#6A52FD] h-[46px] rounded-lg pl-4  text-white"
                onClick={handleClick}
              />
              {/* {loading && (
            <div className="spinner-border text-white" role="status">Spinner</div>
            )} */}
            </div>

            <p className="my-4  lg:mb-5 mb-16 text-[13px] text-[#666666]">
              Already have an account?
              <Link className="text-[#6A52FD] text-[18px] px-2" to="/login">
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
