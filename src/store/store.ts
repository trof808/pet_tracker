import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './slices/userInfoSlice';
import filtersReducer from './slices/filtersSlice';


export const store = configureStore({
  reducer: {
    user: userInfoReducer,
    filters: filtersReducer,
  },
});
