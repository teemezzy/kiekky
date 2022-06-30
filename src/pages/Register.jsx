import React, { useEffect } from "react";
import { bgLogin } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { MidNav } from "../components";
import { useForm } from "react-hook-form";
import { country } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { regUser } from "../Redux/features/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  console.log(user, isError);
  let navigate = useNavigate();

  // Handle Form Event
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Handle form submit
  const onSubmit = (data) => {
    let userdata = {
      
      email: data.email,
      username: data.username,
      phone: data.phone,
      password: data.password,
      city: data.city,
      country: data.country,
    };

    dispatch(regUser(userdata));
  };
  
  useEffect(() => {
    if (isError) {
      // toast.error(message)
    }
    if (isSuccess) {
      navigate("/otp");
    }
  });
  // Set Page Title
  useEffect(() => {
    document.title = "Register | Kiekky";
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
          <form onSubmit={handleSubmit(onSubmit)} className="">
                  <ToastContainer />
            <div className="flex flex-col mb-4">
              <label htmlFor="full_name" className="text-[15px]">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Firstname and Lastname (Surname)"
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
                  errors.confirmpassword &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
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

            <div className="flex flex-col mb-4">
              <label htmlFor="username" className="text-[15px]">
                Username:
              </label>
              <input
                type="text"
                placeholder="Username"
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
                  errors.username &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="text-red-600 text-xs">Username is required</p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-[15px]">
                Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
                  errors.email &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600 text-xs">Email is required</p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="phone" className="text-[15px]">
                Phone Number:
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
                  errors.phone &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs">Phone Number is required</p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-[15px]">
                Country:
              </label>
              <select
                {...register("country", { required: true })}
                defaultValue={"default"}
                name="country"
                id="country"
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 w-full ${
                  errors.country &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
              >
                <option value={"default"} disabled className="text-[15px]">
                  Select Country
                </option>

                {country.map((country) => (
                  <option
                    value={country.name}
                    className="bg-[#F6F4FF] py-1 pl-4"
                    key={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-600 text-xs">Country is needed</p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-[15px]">
                City:
              </label>

              <select
                {...register("city")}
                defaultValue={"default"}
                name="city"
                id="city"
                className="border-2 bg-[#F6F4FF] py-1 pl-4 w-full"
              >
                <option
                  value={"default"}
                  placeholder="Select City"
                  disabled
                  className="text-[15px]"
                >
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
              {errors.city && (
                <p className="text-red-600 text-xs">City is needed</p>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-[15px]">
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
                  errors.password &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-[15px]">
                Confirm Password:
              </label>
              {/* <input
                type="password"
                placeholder="Confirm Password"
                className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
                  errors.confirmpassword &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("confirmpassword", {
                  required: "Password mismatch",
                })}
              /> */}
              {errors.confirmpassword && (
                <p className="text-red-600 text-xs">
                  {errors.confirmpassword.message}
                </p>
              )}
            </div>

            <div className="">
              <input
                type="checkbox"
                {...register("checked", { required: true })}
                className={`border-2 py-1 pl-4 ${
                  errors.checkbox &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
              />
              {errors.checkbox && (
                <p className="text-red-600 text-xs">{errors.checkbox}</p>
              )}
              <label
                className={`pl-2 text-[13px] ${
                  errors.checkbox && "text-red-600"
                }`}
              >
                I guarantee that I am 18 years and above.
              </label>
            </div>

            <div className="">
              <input
                type="checkbox"
                {...register("checked", { required: true })}
              />
              <label
                className={`pl-2 text-[13px] ${
                  errors.checkbox && "text-red-600"
                }`}
              >
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
              Already have an account?
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
