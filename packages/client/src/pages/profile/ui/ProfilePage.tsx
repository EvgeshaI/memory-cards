import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Notification, Loader, Modal } from '@/shared/ui'
import { ChangeAvatar } from '@/features/profilePage/ChangeAvatar'
import { ProfileActions } from '../../../widgets/sidebar/ui/profilePage/ProfileActions'
import { PasswordModal } from '../../../widgets/sidebar/ui/profilePage/PasswordModal'
import { useUserData } from '../../../entities/user/hooks/useUserData'
import cls from './ProfilePage.module.scss'

const BASE_URL = 'https://ya-praktikum.tech/api/v2/resources'

export const ProfilePage: React.FC = () => {
  const { user, isLoading, error } = useUserData()
  const [avatar, setAvatarUrl] = useState(user?.avatar || '')
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.avatar) {
      setAvatarUrl(user.avatar)
    }
  }, [user])

  if (isLoading) return <Loader size="xl" variant="bars" />
  if (!user)
    return (
      <Notification color="red" title="Ошибка">
        Пользователь не существует
      </Notification>
    )

  const avatarUrl = avatar ? `${BASE_URL}${avatar}` : ''

  const handleAvatarChange = (newAvatarUrl: string) => {
    const fullAvatarUrl = `${newAvatarUrl}?${new Date().getTime()}`
    setAvatarUrl(fullAvatarUrl)
  }

  return (
    <div className={cls.root}>
      <div className={cls.profileInfo}>
        <ChangeAvatar
          userId={user.id}
          avatarUrl={avatarUrl}
          onAvatarChange={handleAvatarChange}
        />

        <div className={cls.userDetails}>
          <h2>
            {user.first_name} {user.second_name}
          </h2>
          <p>{user.email}</p>
        </div>

        <ProfileActions
          onPasswordChange={() => setPasswordModalOpen(true)}
          onNavigateHome={() => navigate('/')}
        />
      </div>

      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        userId={user.id}
      />
    </div>
  )
}
