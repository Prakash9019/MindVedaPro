// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios for API calls
import { AppThunk } from './store'; // Adjust the path to your store setup

interface UserState {
  id: string;
  name: string;
  email: string;
  image: string;
  address: string;
  location: string;
  // Other user properties...
}

const initialState: UserState = {
  id: '',
  name: '',
  email: '',
  image: '',
  address: '',
  location: '',
  // Initialize other properties...
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFieldSuccess: (state, action: PayloadAction<{ field: keyof UserState; value: string }>) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateFieldFailure: (state) => {
      // Handle failure (optional)
      console.log(state);
    },
  },
});

export const { updateFieldSuccess, updateFieldFailure } = userSlice.actions;
