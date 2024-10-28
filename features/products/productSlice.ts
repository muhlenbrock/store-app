import { RootState } from '@/store/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(API_URL + '/products');
  return response.data;
});

const initialState = {
  productList: {
    data: [] as Product[],
    loading: false,
    error: null as string | null
  }
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productList.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList.data = action.payload;
        state.productList.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productList.loading = false;
        state.productList.error = action.error.message ?? 'Unknown Error';
        state.productList.data = [];
      });
  }
});

export default productSlice.reducer;

export const productListData = (state: RootState) => state.product?.productList.data;
export const productListLoading = (state: RootState) => state.product?.productList.loading;
export const productListError = (state: RootState) => state.product?.productList.error;
