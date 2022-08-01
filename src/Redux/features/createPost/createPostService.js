import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

//create new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }; 
  console.log(config);

  const response = await axios.post(API_URL + 'post/create', postData, config);
  return response.data;
};

const createPostService = {
  createPost,
};

export default createPostService;
