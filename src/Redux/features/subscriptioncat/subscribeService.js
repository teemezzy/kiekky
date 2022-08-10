import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getSubid = async (subData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "subscription/subscribe", subData, config);
  console.log(response.data, "my response");
  return response.data;
}

const subscribeService = { getSubid };
export default subscribeService;