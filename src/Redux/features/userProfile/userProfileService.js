import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const profileUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    },
  }; 
  // console.log(config);
const response = await axios.get(API_URL + 'user/profile/public/tholscoa', config); 
console.log(response.data.data);
return response.data.data;
};


const userProfileService = {
  profileUser,
  
};

export default userProfileService;
