const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const saveTheme = async (userId: string, theme: 'light' | 'dark') => {
  try {
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
  } catch (error) {
    console.error('Ошибка при сохранении темы:', error);
  }
};

export const loadTheme = async (
  userId: string,
  defaultTheme: 'light' | 'dark' = 'light',
): Promise<'light' | 'dark'> => {
  try {
    const response = await fetch(`${API_BASE_URL}/theme/${userId}`);
    if (!response.ok) {
      throw new Error('Ошибка при загрузке темы');
    }
    const data = await response.json();
    return data.theme;
  } catch (error) {
    console.error('Ошибка при загрузке темы:', error);
    return defaultTheme;
  }
};
