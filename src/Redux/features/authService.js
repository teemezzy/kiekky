import axios from "axios";

const API_URL = "https://kiekky.com/endpoints/public/api/v2/";

const register = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_URL + "register", userData);

  console.log(response.data);

  return response.data;
};

const login = async (data) => {
  const response = await axios.post(API_URL + "login", data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const otp = async (data) => {
  const response = await axios.post(API_URL + "register/confirm_otp", data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  otp,
};

export default authService;
