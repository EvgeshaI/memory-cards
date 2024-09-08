import React, { FC } from 'react';
import { Modal } from '@/shared/ui';
import { AddTopicForm } from '../Form/AddTopicForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddTopicModal: FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal title="Создание топика" opened={isOpen} onClose={onClose}>
      <AddTopicForm onSuccess={onClose} />
    </Modal>
  );
};
