import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice"
import otpReducer from "./features/otp/otpSlice"
import locationReducer from "./features/userLocation/locationSlice"

const store = configureStore({
    reducer: { 
      auth: authReducer,
      otptoken: otpReducer,
      location: locationReducer,

    },
 
})
export default store;