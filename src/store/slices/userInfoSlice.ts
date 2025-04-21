import { createSlice } from '@reduxjs/toolkit';

type State = {
  id: number;
  email: string;
};

const initialState: State = {
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
