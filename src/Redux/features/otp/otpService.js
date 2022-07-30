import axios from "axios";

const API_URL = "https://kiekky.com/api/public/api/user/register/"



const otptoken = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_URL + "confirm_otp", userData);
  if (response.data) {
    localStorage.setItem("otp", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};


const resendotp = async (userData) => {
    const API_URL_2 = `https://kiekky.com/api/public/api/user/register/resend_otp/${userData}`
    console.log(userData);
    // console.log(API_URL_2);
    const response = await axios.post(API_URL_2);
    if (response.data) {
      localStorage.removeItem("otp");
      localStorage.setItem("otp", JSON.stringify(response.data));
    }
    console.log(response.data);
    return response.data;
  };

  const logoutt = () => {
    localStorage.removeItem("otp");
  };
  


const otpService = {
  otptoken,
  resendotp,
  logoutt
};

export default otpService;
