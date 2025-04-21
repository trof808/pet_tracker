import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './slices/userInfoSlice';

export const store = configureStore({
  reducer: {
    user: userInfoReducer,
  },
});