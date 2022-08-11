import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const profile = async ( token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    },
  }; 
  // console.log(config);
const response = await axios.get(API_URL + 'user/profile/private', config); 
console.log(response.data.data);
return response.data.data;
};


const personalProfileService = {
  profile,
  
};

export default personalProfileService;
