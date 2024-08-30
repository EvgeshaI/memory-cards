import React from 'react'
import { ChangeAvatar } from '@/features/profile/changeAvatar'
import { ProfileActions } from '@/widgets/profile'
import cls from './ProfileInfo.module.scss'

interface ProfileInfoProps {
  userId: string
  avatarUrl: string
  firstName: string
  secondName: string
  email: string
  onAvatarChange: (newAvatarUrl: string) => void
  onPasswordChange: () => void
  onLogout: () => void
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  userId,
  avatarUrl,
  firstName,
  secondName,
  email,
  onAvatarChange,
  onPasswordChange,
  onLogout,
}) => {
  return (
    <div className={cls.profileInfo}>
      <ChangeAvatar
        userId={userId}
        avatarUrl={avatarUrl}
        onAvatarChange={onAvatarChange}
      />

      <div className={cls.userDetails}>
        <h2 className={cls.userName}>
          {firstName} {secondName}
        </h2>
        <p className={cls.userEmail}>{email}</p>
      </div>

      <ProfileActions onPasswordChange={onPasswordChange} onLogout={onLogout} />
    </div>
  )
}
