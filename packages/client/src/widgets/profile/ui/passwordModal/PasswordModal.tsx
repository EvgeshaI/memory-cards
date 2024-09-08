import React from 'react';
import { ChangePassword } from '@/features/profile';
import { Modal } from '@/shared/ui';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export const PasswordModal: React.FC<PasswordModalProps> = ({
  isOpen,
  onClose,
  userId,
}) => (
  <Modal opened={isOpen} onClose={onClose} title="Изменение пароля" centered>
    <ChangePassword userId={userId} />
  </Modal>
);
