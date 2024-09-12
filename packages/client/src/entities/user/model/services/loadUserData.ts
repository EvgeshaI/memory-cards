import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserData } from '../../api';
import { User } from '../types';

export const loadUserData = createAsyncThunk<User, void>(
  'user/loadUserData',
  fetchUserData,
);
