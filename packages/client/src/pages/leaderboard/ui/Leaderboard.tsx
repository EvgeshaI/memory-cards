import { Container } from '@mantine/core';
import { LeadersList } from '@/widgets';
import cls from './Leaderboard.module.scss';

export const Leaderboard = () => (
  <Container size="sm" className={cls.container}>
    <LeadersList />
  </Container>
);
