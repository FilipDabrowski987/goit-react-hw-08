import { createSlice } from "@reduxjs/toolkit";

const filtersSlices = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
      setFilter: (state, action) => {
          state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlices.actions;
export default filtersSlices.reducer;