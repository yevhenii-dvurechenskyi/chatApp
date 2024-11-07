import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
        name: "Anton",
        sername: "Loza",
        avatar: "latin_a",
    }, // Пользовательские данные после входа
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }, 
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;