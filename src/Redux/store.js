import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import authReducer from "./features/authSlice";
import otpReducer from "./features/otp/otpSlice";
import locationReducer from "./features/userLocation/locationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    otptoken: otpReducer,
    location: locationReducer,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
