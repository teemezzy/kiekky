import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tokenService from "./tokenService";

// const profile = JSON.parse(localStorage.getItem("profile"));

const initialState = {
  profile: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Token Balance Thunk
export const getUserProfile = createAsyncThunk(
  "profile/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
      return await tokenService.getUserProfile( token);
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
  name: "profile",
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
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = [action.payload];
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      
  },  
});

export default tokenSlice.reducer;
export const { reset } = tokenSlice.actions;
