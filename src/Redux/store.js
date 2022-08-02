import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import authReducer from "./features/authSlice";
import otpReducer from "./features/otp/otpSlice";
import createPostreducer from "./features/createPost/createPostSlice";
import countryReducer from "./features/userLocation/locationSlice";
import getUserSetupReducer from "./features/userSetup/setupSlice";
import getTokenBalanceReducer from "./features/token/tokenSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    otptoken: otpReducer,
    createPost: createPostreducer,
    location: countryReducer,
    accountsetup: getUserSetupReducer,
    wallet: getTokenBalanceReducer,
  },

});
export default store;
