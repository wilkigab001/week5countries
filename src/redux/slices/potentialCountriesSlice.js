import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: {
          common: "Search For Countries",
        },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state, action) => {
      state.value = null;
    },
  },
});

export const {setPotentialCountries, deletePotentialCountries} = potentialCountriesSlice.actions

export const selectPotentials = (state) => state.potentialCountries.value;

export default potentialCountriesSlice.reducer;
