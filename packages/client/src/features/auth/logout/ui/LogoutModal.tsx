import React from 'react';
import { Button, Modal } from '@mantine/core';
import { useLogout } from '../model';

interface LogoutModalProps {
  opened: boolean;
  onClose: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({
  opened,
  onClose,
}) => {
  const { handleLogout } = useLogout();
  const logout = () => {
    onClose();
    return handleLogout();
  };
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Вы точно хотите выйти?"
      centered
    >
      <Button onClick={logout} color="var(--accent-color)" size="md">
        Ok
      </Button>
    </Modal>
  );
};
