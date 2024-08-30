import React from 'react'
import { ActionButton } from '@/shared/ui'
import cls from './ProfileActions.module.scss'

interface ProfileActionsProps {
  onPasswordChange: () => void
  onLogout: () => void
}

export const ProfileActions: React.FC<ProfileActionsProps> = ({
  onPasswordChange,
  onLogout,
}) => (
  <div className={cls.actions}>
    <div className={cls.actionsLeft}>
      <ActionButton
        className={cls.actionButton}
        color="#3E4CBC"
        onClick={onPasswordChange}>
        Изменить пароль
      </ActionButton>
    </div>
    <div className={cls.actionsRight}>
      <ActionButton
        className={cls.actionButton}
        color="#FF5555"
        onClick={onLogout}>
        Выйти
      </ActionButton>
    </div>
  </div>
)
