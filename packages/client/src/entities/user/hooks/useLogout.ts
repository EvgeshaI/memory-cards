import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../api'

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    setLoading(true)
    try {
      await logout()
      navigate('/authorization')
    } catch (error) {
      setError('Ошибка при выходе')
      console.error('Ошибка разлогирования:', error)
    } finally {
      setLoading(false)
    }
  }

  return { handleLogout, error, isLoading }
}
