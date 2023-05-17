import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsSlice';

axios.defaults.baseURL = 'http://localhost:3000';

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
