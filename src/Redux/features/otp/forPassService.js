import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Forgot Password API initialization
const getPassword = async (userdata) => {
  console.log(userdata);

  const response = await axios.post(API_URL + "user/forgot_pass/init", userdata);
  if (response.data) {
    localStorage.setItem("otp", JSON.stringify(response.data.data));
  }
 
  const datas = {
    dataA: response.data,
    dataB: userdata,
  };
  localStorage.setItem("forgotPassword", JSON.stringify(datas));
  return datas;
};

const forPassService = {
  getPassword,

  // logoutt
};

export default forPassService;
