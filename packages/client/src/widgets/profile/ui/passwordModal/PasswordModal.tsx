import React from 'react'
import { Modal } from '@/shared/ui'
import { ChangePassword } from '@/features/profile'

interface PasswordModalProps {
  isOpen: boolean
  onClose: () => void
  userId: string
}

export const PasswordModal: React.FC<PasswordModalProps> = ({
  isOpen,
  onClose,
  userId,
}) => (
  <Modal opened={isOpen} onClose={onClose} title="Изменение пароля" centered>
    <ChangePassword userId={userId} onClose={onClose} />
  </Modal>
)
