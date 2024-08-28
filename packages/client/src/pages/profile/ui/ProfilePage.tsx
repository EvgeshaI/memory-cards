import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Notification, Loader } from '@/shared/ui'
import { ChangeAvatar } from '@/features/profilePage/ChangeAvatar'
import { ProfileActions } from '../../../widgets/profile/ProfileActions'
import { PasswordModal } from '../../../widgets/profile/PasswordModal'
import { useUserData } from '../../../entities/user/hooks/useUserData'
import { handleAvatarChange } from '@/features/profilePage/handleAvatarChange'
import cls from './ProfilePage.module.scss'
import { RESOURCES_URL } from '@/shared/constants/api'

export const ProfilePage: React.FC = () => {
  const { user, isLoading } = useUserData()
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

  const avatarUrl = avatar ? `${RESOURCES_URL}${avatar}` : ''

  return (
    <div className={cls.root}>
      <div className={cls.profileInfo}>
        <ChangeAvatar
          userId={user.id}
          avatarUrl={avatarUrl}
          onAvatarChange={newAvatarUrl =>
            handleAvatarChange(newAvatarUrl, setAvatarUrl)
          }
        />

        <div className={cls.userDetails}>
          <h2 className={cls.userName}>
            {user.first_name} {user.second_name}
          </h2>
          <p className={cls.userEmail}>{user.email}</p>
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
