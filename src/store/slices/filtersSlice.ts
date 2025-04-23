import { createSlice } from "@reduxjs/toolkit";

export type FiltersDate = string;
export type FiltersMonth = string;
export type FiltersTags = string[];

export type FiltersState = {
  date: FiltersDate,
  month: FiltersMonth,
  tags: FiltersTags,
}

const initialState: FiltersState = {
  date: new Date().toISOString().split('T')[0],
  month: new Date().toLocaleString('default', { month: 'long' }),
  tags: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setMonth(state, action) {
      state.month = action.payload;
    },
    setTags(state, action) {
      state.tags = action.payload;
    },
  },
});

export const { setDate, setMonth, setTags } = filtersSlice.actions;
export default filtersSlice.reducer;