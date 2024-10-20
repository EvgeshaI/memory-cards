import { Theme } from '../constants/theme';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const saveTheme = async (userId: string, theme: Theme) => {
  const response = await fetch(`${API_BASE_URL}/theme/${userId}`, {
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
  const response = await fetch(`${API_BASE_URL}/theme/${userId}`);

  if (!response.ok) {
    throw new Error('Ошибка при загрузке темы');
  }

  const data = await response.json();

  return data.theme || defaultTheme;
};
