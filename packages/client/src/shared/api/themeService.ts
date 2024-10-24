import { SERVER_API_URL } from '@/shared/config/env';
import { Theme } from '../constants/theme';

export const saveTheme = async (userId: string, theme: Theme) => {
  const response = await fetch(`${SERVER_API_URL}/theme/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ theme }),
  });

  if (!response.ok) {
    throw new Error('Ошибка при сохранении темы');
  }
};

export const loadTheme = async (
  userId: string,
  defaultTheme: Theme = Theme.LIGHT,
): Promise<Theme> => {
  const response = await fetch(`${SERVER_API_URL}/theme/${userId}`);

  if (!response.ok) {
    throw new Error('Ошибка при загрузке темы');
  }

  const data = await response.json();

  return data.theme || defaultTheme;
};
