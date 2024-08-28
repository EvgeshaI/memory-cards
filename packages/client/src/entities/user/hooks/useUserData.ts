import { useState, useEffect } from 'react'
import { login, fetchUserData } from '../api/userApi'
import { User } from '../model/types'

export const useUserData = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUserData = async () => {
      try {
        await login('supernova', 'qwagdaa5L')

        const userData = await fetchUserData()
        setUser(userData)
      } catch (error) {
        setError('Ошибка при получении данных пользователя')
        console.error('Ошибка:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [])

  return { user, isLoading, error, setUser }
}
