import { createSlice } from '@reduxjs/toolkit';

const initialState = { authData: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload.message) return { authData: null, errors: action.payload.message };
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));

      return { authData: action.payload, errors: null };
    },
    create(state, action) {
      if (action.payload.message) return { authData: null, errors: action.payload.message };
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));

      return { authData: action.payload, errors: null };
    },
    logout(state, action) {
      localStorage.clear();
      return { authData: null, errors: null };
    },
  },
});

export const { login, create } = authSlice.actions;

export default authSlice.reducer;
