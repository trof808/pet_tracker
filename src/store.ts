import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './entities/auth/store/userInfoSlice';
import filtersReducer from './entities/calendar/store/filtersSlice';


export const store = configureStore({
  reducer: {
    user: userInfoReducer,
    filters: filtersReducer,
  },
});
