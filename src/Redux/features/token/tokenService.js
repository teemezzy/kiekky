import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getTokenBalance = async ( token) => {
  console.log(token, 'my token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(config, 'my config')

  const response = await axios.get(API_URL + "user/balance", config);
  return response.data;
};

const tokenService = { getTokenBalance };

export default tokenService;
