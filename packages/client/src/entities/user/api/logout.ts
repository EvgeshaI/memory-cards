import { BASE_URL } from '@/shared/constants/api'

export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error('Не удалось выполнить выход')
    }

    return response.status
  } catch (error) {
    console.error('Ошибка разлогирования:', error)
    throw error
  }
}
