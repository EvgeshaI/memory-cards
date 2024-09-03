import { BASE_URL } from '@/shared/constants/api';

export const changePassword = async (
  userId: string,
  oldPassword: string,
  newPassword: string,
) => {
  try {
    const response = await fetch(`${BASE_URL}/user/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
      credentials: 'include',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Ошибка от сервера:', errorText);
      throw new Error(errorText || 'Не удалось изменить пароль');
    }

    const result = await response.text();

    if (result === 'OK') {
      return { status: 'ok' };
    }
    throw new Error('Некорректный ответ от сервера.');
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error);
    throw error;
  }
};
