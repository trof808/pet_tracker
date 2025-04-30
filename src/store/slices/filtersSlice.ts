import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export type FiltersDate = string;
export type FiltersTags = string[];

export type FiltersState = {
  date: FiltersDate,
  tags: FiltersTags,
}

const initialState: FiltersState = {
  date: format(new Date(), 'yyyy-MM-dd'),
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