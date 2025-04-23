import { createSlice } from '@reduxjs/toolkit';

export type userId = number;
export type userEmail = string;

export type UserState = {
  id: userId;
  email: userEmail;
};

const initialState: UserState = {
  id: 0,
  email: '',
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
