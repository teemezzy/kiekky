import { configureStore } from '@reduxjs/toolkit'

import authReducer from "./features/authSlice"
import otpReducer from "./features/otp/otpSlice"
const store = configureStore({
    reducer: { 
      auth: authReducer,
      otptoken: otpReducer
    },
 
})
export default store;


// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: { },
// })