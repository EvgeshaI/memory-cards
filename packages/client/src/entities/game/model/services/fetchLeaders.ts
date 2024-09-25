import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchLeadersFromServer } from '@/entities/game'

export const fetchLeaders = createAsyncThunk(
  'game/fetchNewLeader',
  async () => {
    try {
      await fetchLeadersFromServer();
    } catch (error) {
      console.error('Ошибка при получении списка лидеров:', error);
      throw error;
    }
  },
);
