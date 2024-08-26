import { API_BASE_URL } from './userApi'

export const changeAvatar = async (userID: string, file: File) => {
  const formData = new FormData()
  formData.append('avatar', file)

  try {
    const response = await fetch(`${API_BASE_URL}/user/profile/avatar`, {
      method: 'PUT',
      body: formData,
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error('Не удалось изменить аватар')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка при изменении аватара:', error)
    throw error
  }
}
