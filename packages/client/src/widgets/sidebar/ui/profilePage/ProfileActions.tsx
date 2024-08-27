import React from 'react'
import { ActionButton } from '@/shared/ui'
import cls from '../../../../pages/profile/ui/ProfilePage.module.scss'

interface ProfileActionsProps {
  onPasswordChange: () => void
  onNavigateHome: () => void
}

export const ProfileActions: React.FC<ProfileActionsProps> = ({
  onPasswordChange,
  onNavigateHome,
}) => (
  <div className={cls.actions}>
    <div className={cls.actionsLeft}>
      <ActionButton
        className={cls.actionButton}
        color="#3E4CBC"
        onClick={onPasswordChange}>
        Изменить пароль
      </ActionButton>
      <ActionButton
        className={cls.actionButton}
        color="#3E4CBC"
        onClick={onNavigateHome}>
        Вернуться на главную
      </ActionButton>
    </div>
    <div className={cls.actionsRight}>
      <ActionButton className={cls.actionButton} color="#FF5555">
        Выйти
      </ActionButton>
    </div>
  </div>
)
