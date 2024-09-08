import clsx from 'clsx';
import { FC } from 'react';
import {
  Container,
  Modal as MantineModal,
  ModalProps as MantineModalProps,
} from '@mantine/core';
import HeaderIcon from '@/shared/assets/header.svg';
import cls from './Modal.module.scss';

export const Modal: FC<MantineModalProps> = (props) => {
  const { className, children, title, ...rest } = props;

  return (
    <MantineModal.Root
      className={clsx(cls.root, className)}
      yOffset={100}
      size={650}
      {...rest}
    >
      <MantineModal.Overlay />
      <MantineModal.Content className={cls.content}>
        <MantineModal.Header className={cls.header}>
          <div className={cls.headerIcon}>
            <HeaderIcon />
          </div>
          <MantineModal.Title className={cls.headerTitle}>
            {title}
          </MantineModal.Title>
        </MantineModal.Header>
        <MantineModal.Body className={cls.body}>
          <Container size="320px">{children}</Container>
        </MantineModal.Body>
      </MantineModal.Content>
    </MantineModal.Root>
  );
};
