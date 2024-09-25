import { createAsyncThunk } from '@reduxjs/toolkit'
import { Leader, sendLeaderToServer } from '@/entities/game'

export const fetchNewLeader = createAsyncThunk(
  'game/fetchNewLeader',
  async (user: Leader) => {
    try {
      await sendLeaderToServer(user);
    } catch (error) {
      console.error('Ошибка при отправке нового лидера:', error);
      throw error;
    }
  },
);
