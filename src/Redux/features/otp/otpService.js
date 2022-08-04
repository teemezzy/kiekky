import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

const otptoken = async (userData) => {
  // console.log(userData);
  const response = await axios.post(API_URL + "user/register/confirm_otp", userData);
  if (response.data) {
    localStorage.setItem("otp", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};


const resendotp = async (userData) => {
    // const API_URL_2 = API_URL + `"user/register/resend_otp/${userData}"`
    // console.log(API_URL_2);
    const response = await axios.post(API_URL + "user/register/resend_otp", userData);
    // console.log(userData);
    if (response.data) {
      localStorage.removeItem("otp");
      localStorage.setItem("otp", JSON.stringify(response.data));
    }
    console.log(response.data);
    return response.data;
  };

  // Forgot Password API initialization
  const getPassword = async (userdata) => {
    const response = await axios.post(API_URL + "user/forgot_pass/init", userdata);
    if (response.data) {
      localStorage.setItem("otp", JSON.stringify(response.data.data));
    }
    // console.log(userdata);
    // console.log(response.data);
    return response.data.data;
  }
  
  

const otpService = {
  otptoken,
  resendotp,
  getPassword,
  
  // logoutt
};

export default otpService;
