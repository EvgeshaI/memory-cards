import React, { useState } from 'react'
import { changePassword } from '@/entities/user'
import { Notification, PasswordInput, Group, Button } from '@/shared/ui'

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
      console.log('Попытка изменить пароль')
      const result = await changePassword(userId, oldPassword, newPassword)

      if (result.status === 'ok') {
        console.log('Пароль успешно изменен')
        setSuccess(true)
        setError(false)
        setErrorMessage('')
      } else {
        console.error(
          'Не удалось изменить пароль, статус от сервера:',
          result.status
        )
        throw new Error('Не удалось изменить пароль.')
      }
    } catch (error) {
      console.error('Ошибка при изменении пароля:', error)
      setSuccess(false)
      setError(true)
      setErrorMessage('Не удалось изменить пароль.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <PasswordInput
        label="Старый пароль"
        placeholder="Введите старый пароль"
        value={oldPassword}
        onChange={e => setOldPassword(e.target.value)}
        required
        mt="md"
      />

      <PasswordInput
        label="Новый пароль"
        placeholder="Введите новый пароль"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        required
        mt="md"
      />

      <Group mt="md">
        <Button type="submit">Изменить пароль</Button>
      </Group>
    </form>
  )
}
