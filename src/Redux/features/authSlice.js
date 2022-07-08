import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import OtpInput from "react-otptoken-input";

import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const otp = JSON.parse(localStorage.getItem("otp"));


const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  otp: otp ? otp : null,

};

export const regUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      console.log(user);
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});





export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(regUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.isError = true;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.user = null;
        state.isError = true;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })

      
  },
});

// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;
export default authSlice.reducer;