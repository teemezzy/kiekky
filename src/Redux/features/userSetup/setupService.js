import axios from "axios";
// import token from './setupSlice'

const API_URL = process.env.REACT_APP_API_URL;

const getUserSetup = async (setup, token) => {
  // console.log(token, 'my token')
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
