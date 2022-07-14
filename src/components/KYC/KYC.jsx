import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FileUploader } from "react-drag-drop-files";

const KYC = () => {
  const [file, setFile] = useState(null);
  const fileTypes = ["JPG", "PNG", "PDF"];
  const handleChange = (file) => {
    setFile(file);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let userdata = {
      full_name: data.full_name,
      phone: data.phone,
      password: data.password,
      city: data.city,
      country: data.country,
      document_type: data.document_type,
      document_file: data.file,
    };

    dispatch(userdata);
  };
  return (
    <div className="bg-white pb-20">
      <div className="lg:w-[625px] w-[347px] m-auto bg-white">
        <p className="pt-[47px] pb-[24px] text-[#828282] w-[183px] m-auto">
          Please verify your identity
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col mb-5 lg:w-auto w-[276px] m-auto">
            <label htmlFor="full_name" className="text-[15px] font-semibold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              placeholder="Firstname and Lastname (Surname)"
              className={`rounded-lg bg-[#F6F4FF] py-[10px] pl-5 ${
                errors.full_name &&
                "focus:border-red-600 focus:ring-red-600 border-red-600"
              }`}
              {...register("full_name", {
                required: true,
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Sorry this can only handle names with characters",
                },
              })}
            />
            {errors.full_name && (
              <p className="text-red-600 text-xs">Full Name is required</p>
            )}
          </div>

          <div className="flex flex-col mb-5 lg:w-auto w-[276px] m-auto">
            <label htmlFor="username" className="text-[15px] mb-2 font-semibold">
              Date Of Birth:
            </label>
            <input
              type="text"
              placeholder="Date Of Birth"
              className={` rounded-lg bg-[#F6F4FF] py-[10px] pl-5 ${
                errors.dob &&
                "focus:border-red-600 focus:ring-red-600 border-red-600"
              }`}
              {...register("dob", { required: true })}
            />
            {errors.dob && (
              <p className="text-red-600 text-xs">Date of Birth is required</p>
            )}
          </div>

          <div className="flex flex-col mb-5 lg:w-auto w-[276px] m-auto">
            <label htmlFor="email" className="text-[15px] mb-2 font-semibold">
              Nationality
            </label>
            <input
              type="email"
              placeholder="Enter Nationality"
              className={` rounded-lg bg-[#F6F4FF] py-[10px] pl-5 ${
                errors.nationality &&
                "focus:border-red-600 focus:ring-red-600 border-red-600"
              }`}
              {...register("nationality", { required: true })}
            />
            {errors.nationality && (
              <p className="text-red-600 text-xs">Nationality is required</p>
            )}
          </div>

          <div className="flex flex-col mb-5 lg:w-auto w-[276px] m-auto">
            <label htmlFor="" className="text-[15px] mb-2 font-semibold">
              Country of Residence:
            </label>
            <input
              type="tel"
              placeholder="Country"
              className={`rounded-lg bg-[#F6F4FF] py-[10px] pl-5 ${
                errors.phone &&
                "focus:border-red-600 focus:ring-red-600 border-red-600"
              }`}
              {...register("country", { required: true })}
            />

            {errors.country && (
              <p className="text-red-600 text-xs">Country is needed</p>
            )}
          </div>

          <div className="flex flex-col mb-5 lg:w-auto w-[276px] m-auto">
            <label htmlFor="" className="text-[15px] mb-2 font-semibold">
              City:
            </label>
            <input
              type="tel"
              placeholder="City"
              className={`rounded-lg bg-[#F6F4FF] py-[10px] pl-5 ${
                errors.city &&
                "focus:border-red-600 focus:ring-red-600 border-red-600"
              }`}
              {...register("city", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-5 lg:w-auto w-[276px] m-auto">
            <label htmlFor="phone" className="text-[15px] mb-2 font-semibold">
              Phone Number:
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className={`rounded-lg bg-[#F6F4FF] py-[10px] pl-5 ${
                errors.phone &&
                "focus:border-red-600 focus:ring-red-600 border-red-600"
              }`}
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="text-red-600 text-xs">Phone Number is required</p>
            )}
          </div>

          <div className="flex flex-col mb-4 lg:w-auto w-[276px] m-auto">
            <label htmlFor="" className="text-[15px] mb-2 font-semibold">
              Document Type:
            </label>
            <select
              {...register("document_type")}
              defaultValue={"default"}
              name="document_type"
              id="document_type"
              className="rounded-lg bg-[#F6F4FF] py-[10px] pl-5 w-full "
            >
              <option
                value={"default"}
                placeholder="Select Document Type"
                disabled
                className="text-[15px] "
              >
                Select Document Type
              </option>
              <option value="document_type">Driver License</option>
              <option value="document_type">Passport</option>
              <option value="document_type">National ID</option>
              <option value="document_type">Voter's Card</option>
            </select>
          </div>

          <div className="lg:w-[500px] w-[252px] mr-[400px] m-auto ">
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              className="w-[272px] lg:w-[500px] p-auto"
            />
            <p>
              {file ? `File name: ${file[0].name}` : "No files uploaded yet"}
            </p>
          </div>
          <div className="w-[276px] m-auto">
            <input
              type="submit"
              value="Save"
              className="border-2 mt-5 lg:w-full w-[276px] m-auto bg-[#6A52FD] py-3 pl-4 rounded-xl text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default KYC;
