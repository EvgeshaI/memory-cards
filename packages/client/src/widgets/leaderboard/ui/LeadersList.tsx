import { Container } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { RouteNames, routePaths } from '@/shared/constants/router'
import { PaperContainer } from '@/shared/ui/paper'
import { PlayerInfo } from '@/entities/user/ui'
import { useEffect } from 'react'
import { selectData } from '@/entities/game'
import { useAppDispatch, useAppSelector } from '@/shared/lib/store'
import { fetchLeaders } from '@/entities/game/model/services'
import cls from './LeadersList.module.scss'

export const LeadersList = () => {
  const dispatch = useAppDispatch();
  const { leaders } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(fetchLeaders());
  }, [dispatch]);

  const filteredAndSortedPlayers = [...leaders].sort(
    (a, b) => a.count - b.count,
  );
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
