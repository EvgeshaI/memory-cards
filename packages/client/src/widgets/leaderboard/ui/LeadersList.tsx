import { Container } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { PaperContainer } from '@/shared/ui/paper';
import { PlayerInfo } from '@/entities/user/ui';
import cls from './LeadersList.module.scss';

export const LeadersList = () => {
  const players = [
    {
      avatar:
        'https://iconape.com/wp-content/files/mb/10833/png/iconfinder_1_avatar_2754574.png',
      name: 'Игрок 1',
      count: 100,
    },
    { avatar: '', name: 'Игрок 2', count: 400 },
    {
      avatar:
        'https://iconape.com/wp-content/files/ya/10843/png/iconfinder_11_avatar_2754576.png',
      name: 'Игрок 3',
      count: 234,
    },
    { avatar: '', name: 'Игрок 4', count: 198 },
    { avatar: '', name: 'Игрок 5', count: 333 },
  ];
  const filteredAndSortedPlayers = players.sort((a, b) => b.count - a.count);
  return (
    <Container w="100%">
      <PaperContainer text="Лидерборд">
        {filteredAndSortedPlayers.map((player) => (
          <PlayerInfo
            key={player.name}
            name={player.name}
            avatar={player.avatar}
            count={player.count}
          />
        ))}
      </PaperContainer>
      <NavLink to={routePaths[RouteNames.MAIN]} className={cls.link}>
        Вернуться на главную
      </NavLink>
    </Container>
  );
};
