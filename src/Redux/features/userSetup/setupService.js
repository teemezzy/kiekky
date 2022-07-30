import axios from "axios";
import token from './setupSlice'

const API_URL = "https://kiekky.com/api/public/api/user/account/setup";

const getUserSetup = async (setup, token) => {
  console.log(token, 'my token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(config, 'my config')

  const response = await axios.post(API_URL, setup, config);
  return response.data;
};

const setupService = { getUserSetup };

export default setupService;
