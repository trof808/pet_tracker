import { createSlice } from "@reduxjs/toolkit";

export type FiltersDate = string;
export type FiltersTags = string[];

export type FiltersState = {
  date: FiltersDate,
  tags: FiltersTags,
}

const initialState: FiltersState = {
  date: new Date().toISOString().split('T')[0],
  // Убрать месяц. Хранить всю дату в одном поле
  tags: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setTags(state, action) {
      state.tags = action.payload;
    },
  },
});

export const { setDate, setTags } = filtersSlice.actions;
export default filtersSlice.reducer;