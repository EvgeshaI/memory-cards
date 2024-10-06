import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendLeaderToServer } from '../../api/leaderboardApi';

export const fetchNewLeader = createAsyncThunk(
  'game/fetchNewLeader',
  async (time: number, { getState }) => {
    const state = getState() as RootState;
    const user = state.user?.data;

    if (!user) {
      throw new Error('Пользователь не найден');
    }
    const gamerInfo = {
      avatar: user.avatar,
      name: user.first_name,
      count: time,
    };
    try {
      await sendLeaderToServer(gamerInfo);
    } catch (error) {
      console.error('Ошибка при отправке нового лидера:', error);
      throw error;
    }
  },
);
