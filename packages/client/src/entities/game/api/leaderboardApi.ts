import { BASE_URL } from '@/shared/constants/api'
import { Leader } from '@/entities/game/model/types'
import { postRequest } from '../lib/postRequest'

export const sendLeaderToServer = (user: Leader) => {
  const formData = {
    data: {
      myField: user,
      memoCardsTime: user.count,
    },
    ratingFieldName: 'memoCardsTime',
    teamName: 'memoryCards',
  };

  return postRequest(`${BASE_URL}/leaderboard`, formData);
};

export const fetchLeadersFromServer = () => {
  const formData = {
    ratingFieldName: 'memoCardsTime',
    cursor: 0,
    limit: 5,
  };

  return postRequest(`${BASE_URL}/leaderboard/all`, formData);
};
