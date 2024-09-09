import React, { useState, useEffect } from 'react';
import { useUserData, useLogout } from '@/entities/user';
import { handleAvatarChange } from '@/features/profile';
import { Notification, Loader } from '@/shared/ui';
import { RESOURCES_URL } from '@/shared/constants/api';
import cls from './Profile.module.scss';
import { PasswordModal } from '../passwordModal/PasswordModal';
import { ProfileInfo } from '../profileInfo/ProfileInfo';

export const ProfileSection: React.FC = () => {
  const { user, isLoading } = useUserData();
  const { handleLogout } = useLogout();
  const [avatar, setAvatarUrl] = useState(user?.avatar || '');
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);

  useEffect(() => {
    if (user?.avatar) {
      setAvatarUrl(user.avatar);
    }
  }, [user]);

  if (isLoading) return <Loader size="xl" variant="bars" />;
  if (!user)
    return (
      <Notification color="red" title="Ошибка">
        Пользователь не существует
      </Notification>
    );

  const avatarUrl = avatar ? `${RESOURCES_URL}${avatar}` : '';

  return (
    <div className={cls.root}>
      <ProfileInfo
        userId={user.id}
        avatarUrl={avatarUrl}
        firstName={user.first_name}
        secondName={user.second_name}
        email={user.email}
        onAvatarChange={(newAvatarUrl) =>
          handleAvatarChange(newAvatarUrl, setAvatarUrl)
        }
        onPasswordChange={() => setPasswordModalOpen(true)}
        onLogout={handleLogout}
      />
      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        userId={user.id}
      />
    </div>
  );
};
