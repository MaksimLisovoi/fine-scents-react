import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsSlice';

axios.defaults.baseURL = 'http://localhost:3000/api';

export const fetchProducts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/products');

      return data.products;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchById = createAsyncThunk(
  'contacts/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/products/${id}`);

      return data.product;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchByCategory = createAsyncThunk(
  'contacts/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/products?category=${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBestsellers = createAsyncThunk(
  'contacts/fetchBestellers',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/products/bestsellers');

      return data.products;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);