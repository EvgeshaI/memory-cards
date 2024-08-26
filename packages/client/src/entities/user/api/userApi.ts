export const API_BASE_URL = 'https://ya-praktikum.tech/api/v2'

export const login = async (login: string, password: string) => {
  //const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  try {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error('Не удалось выполнить вход')
    }

    const data = await response.text()

    return data
  } catch (error) {
    console.error('Ошибка авторизации:', error)
    throw error
  }
}

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/user`, {
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
