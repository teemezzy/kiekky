import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import resetpasswordService from "./resetpasswordService";

const otp = JSON.parse(localStorage.getItem("otp"));

const initialState = {
  resetpass: otp ? otp : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const resetPass = createAsyncThunk(
    "otptoken/forgotPass",
    async (passData, thunkAPI) => {
      try {
        const userdata = thunkAPI.getState().otptoken.otp.userdata;
        // console.log(userdata);
        return await resetpasswordService.getstate(userdata, passData);
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

  export const resetpasswordSlice = createSlice({
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
      // Reset Password Reducer
   .addCase(resetPass.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(resetPass.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.otp = action.payload;
  })
  .addCase(resetPass.rejected, (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.message = action.payload;
    state.isError = true;
  })

},
});
  

  // Action creators are generated for each case reducer function
export const { reset } = resetpasswordSlice.actions;

export default resetpasswordSlice.reducer;
