import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userProfileService from "./userProfileService";

const initialState = { 
    profileUser: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };

  export const userProfile = createAsyncThunk(
    "profile/personal",
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.access_token;
        return await userProfileService.profileUser(token); 
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

  export const userProfileSlice = createSlice({
    name: "userprofiles",
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
        .addCase(userProfile.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(userProfile.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.profileUser = [action.payload]
        })
        .addCase(userProfile.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })
    },
  });
  
  export const { reset } = userProfileSlice.actions;
  export default userProfileSlice.reducer;