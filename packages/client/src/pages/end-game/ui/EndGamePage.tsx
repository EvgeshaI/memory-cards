import React from 'react';
import { Container } from '@mantine/core';
import { EndGameInfo } from '@/widgets';
import cls from './EndGamePage.module.scss';

export const EndGamePage = () => (
  <Container fluid className={cls.container}>
    <EndGameInfo data-testid="end-game-info" />
  </Container>
);
