import { YANDEX_API_URL } from '@/shared/config/env';

export const fetchRegData = async (
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string,
) => {
  try {
    const response = await fetch(`${YANDEX_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        second_name,
        login,
        email,
        password,
        phone,
      }),
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Не удалось получить данные пользователя');
    }
    const result = await response.text();

    if (result === 'OK') {
      return { status: 'ok' };
    }
    throw new Error('Некорректный ответ от сервера.');
  } catch (error) {
    console.error('Ошибка в получении данных пользователя:', error);
    throw error;
  }
};

export const fetchLoginData = async (login: string, password: string) => {
  try {
    const response = await fetch(`${YANDEX_API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Не удалось получить данные пользователя');
    }
    const result = await response.text();

    if (result === 'OK') {
      return { status: 'ok' };
    }
    throw new Error('Некорректный ответ от сервера.');
  } catch (error) {
    console.error('Ошибка в получении данных пользователя:', error);
    throw error;
  }
};

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${YANDEX_API_URL}/auth/user`, {
      method: 'GET',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Не удалось получить данные пользователя');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Ошибка в получении данных пользователя:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${YANDEX_API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Не удалось выполнить выход');
    }

    return response.status;
  } catch (error) {
    console.error('Ошибка разлогирования:', error);
    throw error;
  }
};
