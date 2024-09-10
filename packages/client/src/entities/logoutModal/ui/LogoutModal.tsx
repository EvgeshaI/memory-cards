import React from 'react'
import { Button, Modal } from '@mantine/core'

interface LogoutModalProps {
  opened: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({
  opened,
  onClose,
  onLogout,
}) => (
  <Modal
    opened={opened}
    onClose={onClose}
    title="Вы точно хотите выйти?"
    centered
  >
    <Button onClick={onLogout} color="var(--accent-color)" size="md">
      Ok
    </Button>
  </Modal>
);
