import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendLeaderToServer } from '@/entities/game'
import { Leader } from '@/entities/game/model/types'

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
