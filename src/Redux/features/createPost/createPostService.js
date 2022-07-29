import axios from "axios";

const API_URL = "https://kiekky.com/api/public/api/post/create";

//create new post
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }; 
  const response = await axios.post(API_URL, postData, config);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const createPostService = {
  createPost,
};

export default createPostService;
