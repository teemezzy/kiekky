import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import personalProfileService from "./personalProfileService";


const initialState = { 
  profile: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create new post
export const personalProfile = createAsyncThunk(
  "profile/personal",
  async (_, thunkAPI) => {
    try {
     
      const token = thunkAPI.getState().auth.user.access_token;
      return await personalProfileService.profile(token); 
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

export const personalProfileSlice = createSlice({
  name: "profiles",
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
      .addCase(personalProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(personalProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = [action.payload]
      })
      .addCase(personalProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = personalProfileSlice.actions;
export default personalProfileSlice.reducer;
