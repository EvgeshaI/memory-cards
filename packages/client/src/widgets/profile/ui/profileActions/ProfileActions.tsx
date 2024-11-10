import React from 'react';
import { ActionButton } from '@/shared/ui';
import cls from './ProfileActions.module.scss';

interface ProfileActionsProps {
  onPasswordChange: () => void;
}

export const ProfileActions: React.FC<ProfileActionsProps> = ({
  onPasswordChange,
}) => (
  <div className={cls.actions}>
    <ActionButton
      className={cls.actionButton}
      color="text-color"
      onClick={onPasswordChange}
    >
      Изменить пароль
    </ActionButton>
  </div>
);
