import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import authReducer from "./features/authSlice";
import otpReducer from "./features/otp/otpSlice";
import createPostreducer from "./features/createPost/createPostSlice";
import countryReducer from "./features/userLocation/locationSlice";
import getUserSetupReducer from "./features/userSetup/setupSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    otptoken: otpReducer,
    createPost: createPostreducer,
    location: countryReducer,
    accountsetup: getUserSetupReducer,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
