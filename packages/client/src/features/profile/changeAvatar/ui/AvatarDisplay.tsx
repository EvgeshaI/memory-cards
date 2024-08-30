import React from 'react'
import cls from './ChangeAvatar.module.scss'

interface AvatarDisplayProps {
  avatarUrl?: string
  onClick: () => void
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({
  avatarUrl,
  onClick,
}) => (
  <div className={cls.avatarContainer} onClick={onClick}>
    {avatarUrl ? (
      <img src={avatarUrl} alt="аватар" />
    ) : (
      <div className={cls.placeholderAvatar}></div>
    )}
    <div className={cls.hoverText}>Нажмите, чтобы изменить аватар</div>
  </div>
)
