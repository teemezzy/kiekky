import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import authReducer from "./features/authSlice";
import otpReducer from "./features/otp/otpSlice";
import createPostreducer from "./features/createPost/createPostSlice";
import countryReducer from "./features/userLocation/locationSlice";
import getUserSetupReducer from "./features/userSetup/setupSlice";
import feedsReducer from './features/feeds/feedsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    otptoken: otpReducer,
    posts: createPostreducer,
    location: countryReducer,
    accountsetup: getUserSetupReducer,
    feeds: feedsReducer
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
