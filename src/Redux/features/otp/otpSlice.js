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

  export const getPassword = createAsyncThunk(
  "otptoken/forgotPass",
  async (userdata, thunkAPI) => {
    try {
      // console.log(otp);
      return await otpService.getPassword(userdata);
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



export const logoutt = createAsyncThunk("otptoken/logout", async () => {
  await otpService.logout();
});

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
// Forgot Password Reducer
      .addCase(getPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.otp = action.payload;
      })
      .addCase(getPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.isError = true;
      })

      // Logout
      .addCase(logoutt.fulfilled, (state) => {
        state.user = null;
        state.otp = null;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(logoutt.pending, (state) => {
        state.isLoading = true;
       
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = otpSlice.actions;

export default otpSlice.reducer;
