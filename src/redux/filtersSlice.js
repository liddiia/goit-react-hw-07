import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "filters",
  initialState:{
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filtersContacts = (state) => state.filters.name;
export const { setFilter } = slice.actions;

export default slice.reducer;
