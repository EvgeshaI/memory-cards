import { BASE_URL } from '@/shared/constants/api'

export const fetchRegData = async (
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: first_name,
        second_name: second_name,
        login: login,
        email: email,
        password: password,
        phone: phone,
      }),
      credentials: 'include',
    })
    if (!response.ok) {
      throw new Error('Не удалось получить данные пользователя')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка в получении данных пользователя:', error)
    throw error
  }
}

export const fetchLoginData = async (login: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
      credentials: 'include',
    })
    if (!response.ok) {
      throw new Error('Не удалось получить данные пользователя')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка в получении данных пользователя:', error)
    throw error
  }
}

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth/user`, {
      method: 'GET',
      credentials: 'include',
    })
    if (!response.ok) {
      throw new Error('Не удалось получить данные пользователя')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка в получении данных пользователя:', error)
    throw error
  }
}
