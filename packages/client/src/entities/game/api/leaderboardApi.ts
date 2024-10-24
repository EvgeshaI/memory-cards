import { YANDEX_API_URL } from '@/shared/config/env';
import { Leader } from '@/entities/game/model/types';
import { postRequest } from '../lib/postRequest';

export const sendLeaderToServer = (user: Leader) => {
  const formData = {
    data: {
      myField: user,
      memoCardsTime: user.count,
    },
    ratingFieldName: 'memoCardsTime',
    teamName: 'memoryCards',
  };

  return postRequest(`${YANDEX_API_URL}/leaderboard`, formData);
};

export const fetchLeadersFromServer = () => {
  const formData = {
    ratingFieldName: 'memoCardsTime',
    cursor: 0,
    limit: 5,
  };

  return postRequest(`${YANDEX_API_URL}/leaderboard/all`, formData);
};
