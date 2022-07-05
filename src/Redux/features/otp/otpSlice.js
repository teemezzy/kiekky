import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import otpService from "./otpService";

const otp = JSON.parse(localStorage.getItem("otp"));

const initialState = {
  otp: otp ? otp : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


export const otptoken = createAsyncThunk(
  "otptoken/otp",
  async (user, thunkAPI) => {
    try {
      console.log(user);
      return await otpService.otptoken(user);
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

export const resendotp = createAsyncThunk(
    "otptoken/resendotp",
    async (user, thunkAPI) => {
      try {
        console.log(user);
        return await otpService.resendotp(user);
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
  

export const otpSlice = createSlice({
  name: "otptoken",
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

    .addCase(otptoken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(otptoken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.otp = action.payload;
      })
      .addCase(otptoken.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.isError = true;
      })

      .addCase(resendotp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendotp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.otp = action.payload;
      })
      .addCase(resendotp.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.isError = true;
      })
    
  },
});

// Action creators are generated for each case reducer function
export const { reset } = otpSlice.actions;

export default otpSlice.reducer;
