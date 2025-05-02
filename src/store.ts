import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './entities/auth/services/model/userInfoSlice';
import filtersReducer from './entities/calendar/ui/model/filtersSlice';


export const store = configureStore({
  reducer: {
    user: userInfoReducer,
    filters: filtersReducer,
  },
});
