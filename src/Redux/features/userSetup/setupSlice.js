import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import setupService from "./setupService";

const usersetup = JSON.parse(localStorage.getItem("usersetup"));

const initialState = {
  usersetup: usersetup ? usersetup : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUserSetup = createAsyncThunk(
  "usersetup/get",
  async (setup, thunkAPI) => {
    try {
      const token = thunkAPI.getState().otptoken.otp.access_token;
      console.log(token, setup, "my token joan");
      return await setupService.getUserSetup(setup, token);
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

export const setupSlice = createSlice({
  name: "accountsetup",
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
    .addCase(getUserSetup.pending, (state) => {
        state.isLoading = true;
      })
    .addCase (getUserSetup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.usersetup = action.payload
    //   state.usersetup.push(action.payload);
    })
    .addCase (getUserSetup.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    //   state.usersetup = null;
    })
},
})

export const { reset } = setupSlice.actions;
export default setupSlice.reducer;