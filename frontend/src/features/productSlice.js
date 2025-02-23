import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async ({ page, sort, filters }) => {
    const response = await api.get(`/products?page=${page}&sort=${sort}`, { params: filters });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: { data: [], loading: false },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  }
});

export default productsSlice.reducer;