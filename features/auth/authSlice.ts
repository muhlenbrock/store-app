import { RootState } from '@/store/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'https://fakestoreapi.com/auth';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: { username: string; password: string }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await axios.post(`${API_URL}/login`, data, config);
    return response.data;
  }
);

const initialState = {
  userLogin: {
    data: { token: '' },
    loading: false,
    error: null as string | null
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userLogin = initialState.userLogin;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.userLogin.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userLogin.data = action.payload;
        state.userLogin.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.userLogin.data = initialState.userLogin.data;
        state.userLogin.loading = false;
        state.userLogin.error = action.error.message ?? 'Unknown Error';
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const userLoginData = (state: RootState) => state.auth?.userLogin.data;
export const userLoginLoading = (state: RootState) => state.auth?.userLogin.loading;
