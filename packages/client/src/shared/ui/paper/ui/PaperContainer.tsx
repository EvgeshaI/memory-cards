import React from 'react';
import { Paper } from '@mantine/core';
import cls from './PaperContainer.module.scss';
import HeaderIcon from '../../../assets/header.svg';

interface PaperContainerProps {
  children: React.ReactNode;
  text: string;
}

export const PaperContainer: React.FC<PaperContainerProps> = ({
  children,
  text,
}) => (
  <Paper shadow="md" radius="50px" className={cls.settingsContainer}>
    <div className={cls.title}>
      <HeaderIcon />
    </div>
    <h2 className={cls.titleText}>{text}</h2>
    {children}
  </Paper>
);
