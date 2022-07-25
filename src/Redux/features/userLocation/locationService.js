import axios from "axios";

const API_URL = "https://kiekky.com/api/public/api/";

// GET USER COUNTRY
const country = async (userData) => {
    console.log(userData);
    const response = await axios.get(API_URL + "location/countries");
    localStorage.setItem("country", JSON.stringify(response.data));
    console.log(response.data);
  
    return response.data;
  };
  
// Get User States
const states = async (id) => {
    console.log(id);
    const response = await axios.get(API_URL + `location/country/${id}`);
    localStorage.setItem("country", JSON.stringify(response.data));
    console.log(response.data);
  
    return response.data;
}

// GET USER CITY
const city = async (id) => {
    console.log(id);
    const response = await axios.get(API_URL + `location/state/${id}`);
    localStorage.setItem("city", JSON.stringify(response.data));
    console.log(response.data);
  
    return response.data;
}

  // RETURN AND EXPORT AUTH SERVICE
const locationService = {
    country,
    states,
    city
  };
  
  export default locationService;
  