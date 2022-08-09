import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getSub = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(API_URL + "subscription/all", config);
    console.log(response.data, "my response");
    return response.data;
  };
  
  const tokenService = { getSub };
  export default tokenService;