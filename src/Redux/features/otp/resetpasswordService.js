import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL


// Reset Password API Final

const resetPass = async ( passData) => {
    const response = await axios.post(API_URL + "user/forgot_pass/final", passData);
    if (response.data) {
      localStorage.setItem("otp", JSON.stringify(response.data.data));
    }
    // console.log(userdata);
    console.log(response.data);
    return response.data.data;
  }


   
  const resetpasswordService = {resetPass}
    export default resetpasswordService;


