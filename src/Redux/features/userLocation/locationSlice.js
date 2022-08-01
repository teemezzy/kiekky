import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  location: [],
  statedata:null,
  citydata:null,
  isError: false,
  isSuccess: false,
  message: "",

};

const API_URL = process.env.REACT_APP_API_URL;

//   Auth for Country
export const country = createAsyncThunk("location/country", () => {
  return axios
    .get(API_URL + "location/countries")
    .then((response) => response.data.data);
});

//   Auth for States
export const states = createAsyncThunk("location/states", (id) => {
  console.log(`${id} working`);
  return axios
    .get(API_URL + `location/country/${id}`)
    .then((response) => response.data.data);
});

//   Auth for City
export const city = createAsyncThunk("location/city", (id) => {
  // console.log(`${id} working`);
  return axios
    .get(API_URL + `location/state/${id}`)
    .then((response) => response.data.data);
});

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    resett: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.statedata = null
      state.citydata = null


    },
  },

  extraReducers: (builder) => {
    builder
      // Country reducer
      .addCase(country.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(country.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.location = action.payload;
      })
      .addCase(country.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      //   States reducer
      .addCase(states.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(states.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
 
        state.statedata = action.payload;
      })
      .addCase(states.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = [action.payload];
      })

      // City reducer
      .addCase(city.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(city.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.citydata = action.payload;
      })
      .addCase(city.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resett } = locationSlice.actions;
export default locationSlice.reducer;
