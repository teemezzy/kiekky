import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import resetpasswordService from "./resetpasswordService";


// const resetpass = JSON.parse(localStorage.getItem("otp"));

const initialState = {
  resetpass: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getPass = createAsyncThunk(
    "resetpassword/forgotPass",
    async (passData, thunkAPI) => {
      try {
        return await resetpasswordService.resetPass(passData);
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


//  export const getPass = createAsyncThunk("resetpassword/forgotPass", async (passData, thunkAPI) => {
//     try {
//       return await authService.login(user);
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   });



  export const resetpasswordSlice = createSlice({
    name: "resetpassword",
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
   .addCase(getPass.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(getPass.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.resetpass = action.payload;
  })
  .addCase(getPass.rejected, (state, action) => {
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
