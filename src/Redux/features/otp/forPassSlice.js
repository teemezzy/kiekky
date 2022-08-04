import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import forPassService from "./forPassService.js";

const forgotPassword = JSON.parse(localStorage.getItem("forgotPassword"));

const initialState = {
  forgotPassword: forgotPassword ? forgotPassword : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  status: "",
  data: "",
};

export const getPassword = createAsyncThunk(
  "forgotPassword/forgotPass",
  async (userdata, thunkAPI) => {
    try {
      // console.log(otp);
      return await forPassService.getPassword(userdata);
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

export const forPassSlice = createSlice({
  name: "forgotPassword",
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

      // Forgot Password Reducer
      .addCase(getPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.forgotPassword= action.payload;
      })
      .addCase(getPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = forPassSlice.actions;

export default forPassSlice.reducer;
