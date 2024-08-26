import { API_BASE_URL } from './userApi'

export const changePassword = async (
  userId: string,
  oldPassword: string,
  newPassword: string
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
      credentials: 'include',
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Ошибка от сервера:', errorData)
      throw new Error(errorData.message || 'Не удалось изменить пароль')
    }

    return response.json()
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error)
    throw error
  }
}
