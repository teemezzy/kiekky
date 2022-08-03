import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getTokenBalance = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "user/balance", config);
  return response.data;
};

const tokenService = { getTokenBalance };
export default tokenService;
