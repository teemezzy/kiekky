import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

const feeds = async (postfeeds,token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }; 
    // console.log(config);
    const response = await axios.post(API_URL + 'user/feeds', postfeeds, config);
   console.log(response.data.data);
  //  console.log(response);
    return response.data.data;
  };
  
  const feedService = {
    feeds
  };
  
  export default feedService;