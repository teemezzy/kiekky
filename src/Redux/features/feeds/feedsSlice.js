import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import feedService from "./feedsService";


const initialState = {
    feeds: [],
    isError:false,
    isLoading: false,
    isSuccess: false,
}

export const getfeeds = createAsyncThunk(
    "feeds/post",
    async (postfeed, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.access_token;
        return await feedService.feeds(postfeed, token);
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


 
 export const feedSlice = createSlice({
    name: "feedss",
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
        .addCase(getfeeds.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getfeeds.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.feeds = action.payload;
        })
        .addCase(getfeeds.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
        
    },
  });
  
  export const { reset } = feedSlice.actions;
  export default feedSlice.reducer;