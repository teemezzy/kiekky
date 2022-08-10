import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subscribeService from "./subscribeService";
const subscribe = JSON.parse(localStorage.getItem("subscribe"));
const initialState = {
  subscribe: subscribe ? subscribe : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getSubid = createAsyncThunk(
  "subscribe/getSubscriptionId",
  async (subData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.access_token;
      console.log(token, "my token joan");
      return await subscribeService.getSubid(subData, token);
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

export const subscribeSlice = createSlice({
  name: "subscribe",
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
      // Subscription for Subscribed Reducer
      .addCase(getSubid.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubid.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subscribe = action.payload;
      })
      .addCase(getSubid.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default subscribeSlice.reducer;
export const { reset } = subscribeSlice.actions;
