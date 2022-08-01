import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Register user API
const register = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_URL + "user/register", userData);
  localStorage.setItem("user", JSON.stringify(response.data));
  console.log(response.data);

  return response.data;
};

// Login user session API
const login = async (data) => {
  const response = await axios.post(API_URL + "login", data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user session
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("otp");
  // localStorage.removeItem("token");
};

// Get user from localstorage with token (otpSlice)
const otptoken = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_URL + "register/confirm_otp", userData);
  if (response.data) {
    localStorage.setItem("otp", JSON.stringify(response.data));
  }

  console.log(response.data);

  return response.data;
};

// RETURN AND EXPORT AUTH SERVICE
const authService = {
  register,
  login,
  logout,
  otptoken,
};

export default authService;
