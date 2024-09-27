import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchLeadersFromServer, gameActions } from '@/entities/game'
import { mapLeaders } from '@/entities/game/lib/mapLeaders'

export const fetchLeaders = createAsyncThunk(
  'game/fetchLeaders',
  async (_, { dispatch }) => {
    try {
      const data = await fetchLeadersFromServer();
      const leaders = mapLeaders(data);

      dispatch(gameActions.setLeaders(leaders));
    } catch (error) {
      console.error('Ошибка при получении списка лидеров:', error);
      throw error;
    }
  },
);
