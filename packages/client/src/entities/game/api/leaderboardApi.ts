import { BASE_URL } from '@/shared/constants/api'
import { Leader } from '@/entities/game'

export const sendLeaderToServer = async (user: Leader) => {
  const formData = JSON.stringify({
    data: {
      myField: user,
      memoCardsTime: user.count,
    },
    ratingFieldName: 'memoCardsTime',
    teamName: 'memoryCards',
  });

  const response = await fetch(`${BASE_URL}/leaderboard`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Произошла ошибка при отправке лидера');
  }
  return response.json();
};

export const fetchLeadersFromServer = async () => {
  const formData = JSON.stringify({
    ratingFieldName: 'memoCardsTime',
    cursor: 0,
    limit: 5,
  });

  const response = await fetch(`${BASE_URL}/leaderboard/all`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Произошла ошибка при получении списка лидеров');
  }

  return response.json();
};
