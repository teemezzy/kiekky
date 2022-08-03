import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getUserSetup = async (setup, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(config, 'my config')

  const response = await axios.post(API_URL + "user/account/setup", setup, config);
  return response.data;
};

const setupService = { getUserSetup };

export default setupService;
