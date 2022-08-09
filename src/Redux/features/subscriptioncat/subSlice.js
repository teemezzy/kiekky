import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subService from "./subService";

const initialState = {
  subscription: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Subscription Thunk
export const getSub = createAsyncThunk(
  "subscription/getSubscription",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
    //   console.log(token, "my token joan");
      return await subService.getSub(token);
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

export const subSlice = createSlice({
  name: "subscription",
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
      // Subscription Reducer
      .addCase(getSub.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSub.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subscription = action.payload;
      })
      .addCase(getSub.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default subSlice.reducer;
export const { reset } = subSlice.actions;
