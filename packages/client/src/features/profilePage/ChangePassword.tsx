import React, { useState } from 'react'
import { changePassword } from '../../entities/user/api/changePasswordApi'
import { Notification } from '@/shared/ui'

interface ChangePasswordFormProps {
  userId: string
  onClose: () => void
}

export const ChangePassword: React.FC<ChangePasswordFormProps> = ({
  userId,
}) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await changePassword(userId, oldPassword, newPassword)
      setSuccess(true)
      setError(false)
      setErrorMessage('')
      onclose
    } catch (error) {
      setSuccess(false)
      setError(true)
      setErrorMessage('Не удалось изменить пароль.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Изменение пароля</h3>
      {success && (
        <Notification color="green" title="Успешно">
          Пароль изменен
        </Notification>
      )}
      {error && (
        <Notification color="red" title="Ошибка">
          {errorMessage}
        </Notification>
      )}
      <input
        type="password"
        placeholder="Старый пароль"
        value={oldPassword}
        onChange={e => setOldPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Новый пароль"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Изменить пароль</button>
    </form>
  )
}
