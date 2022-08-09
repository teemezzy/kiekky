import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import authReducer from "./features/authSlice";
import otpReducer from "./features/otp/otpSlice";
import createPostreducer from "./features/createPost/createPostSlice";
import countryReducer from "./features/userLocation/locationSlice";
import getUserSetupReducer from "./features/userSetup/setupSlice";
import feedsReducer from './features/feeds/feedsSlice'
import getTokenBalanceReducer from "./features/token/tokenSlice";
import getSubReducer from "./features/subscriptioncat/subSlice";
import resetpasswordReducer from "./features/otp/resetpasswordSlice";
import forPassReducer from "./features/otp/forPassSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    otptoken: otpReducer,
    posts: createPostreducer,
    location: countryReducer,
    accountsetup: getUserSetupReducer,
    feeds: feedsReducer,
    wallet: getTokenBalanceReducer, 
    subscription: getSubReducer,
    resetpassword: resetpasswordReducer,
    verifyEmail:forPassReducer,
  },

});
export default store;
