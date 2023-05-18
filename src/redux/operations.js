import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsSlice';

export const fetchProducts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products');
      return response.data;
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
      const response = await axios.get('/products?isBestseller=true');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
