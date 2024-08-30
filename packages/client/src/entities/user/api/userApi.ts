import { BASE_URL } from '@/shared/constants/api'

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
