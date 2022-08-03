import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tokenService from "./tokenService";

// const userbalance = JSON.parse(localStorage.getItem("userbalance"));

const initialState = {
  userbalance: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Token Balance Thunk
export const getTokenBalance = createAsyncThunk(
  "userbalance/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
      // console.log(token, "my token joan");
      return await tokenService.getTokenBalance( token);
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

// Wallet Slice
export const tokenSlice = createSlice({
  name: "wallet",
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
      // Token Balance Reducer
      .addCase(getTokenBalance.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTokenBalance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userbalance = [action.payload];
      })
      .addCase(getTokenBalance.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },  
});

export default tokenSlice.reducer;
export const { reset } = tokenSlice.actions;
