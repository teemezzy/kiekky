import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    },
  }; 
  // console.log(config);
const response = await axios.post(API_URL + 'post/create', postData, config); 
console.log(response.data.data);
return response.data.data;
};

// get user post
const getPost = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }; 
  // console.log(config);
  const response = await axios.get(API_URL + 'post/create', config);
  return response.data;
};

const createPostService = {
  createPost,
  getPost
};

export default createPostService;
