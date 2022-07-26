import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import locationService from "./locationService";

const initialState = {
  location: [],
  isError: false,
  isSuccess: false,
  message: "",
};

//   Auth for Country
export const country = createAsyncThunk(
  "location/getAll",
  async (data, thunkAPI) => {
      console.log(data);
    try {
        const country = thunkAPI.getState()
        return await locationService.country(data, country);
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

//   Auth for States
export const states = createAsyncThunk(
  "location/states",
  async (user, thunkAPI) => {
    try {
      console.log(user);
      return await locationService.states(user);
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

//   Auth for City
export const city = createAsyncThunk(
  "location/city",
  async (user, thunkAPI) => {
    try {
      console.log(user);
      return await locationService.city(user);
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

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },


  extraReducers: (builder) => {
    builder
    // Country reducer
      .addCase(country.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(country.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(country.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null
      })

    //   States reducer
    .addCase(states.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(states.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(states.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null
      })

    // City reducer
      .addCase(city.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(city.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(city.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null
      })

    }
});

// Action creators are generated for each case reducer function
export const { resett } = locationSlice.actions;
export default locationSlice.reducer;
