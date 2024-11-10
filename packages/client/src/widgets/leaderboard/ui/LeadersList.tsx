import { Container } from '@mantine/core';
import { useEffect } from 'react';
import { PaperContainer } from '@/shared/ui/paper';
import { PlayerInfo } from '@/entities/user/ui';
import { selectData } from '@/entities/game';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { fetchLeaders } from '@/entities/game/model/services';

export const LeadersList = () => {
  const dispatch = useAppDispatch();
  const { leaders } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(fetchLeaders());
  }, [dispatch]);

  const filteredAndSortedPlayers = [...leaders]
    .sort((a, b) => a.count - b.count)
    .slice(0, 10);

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
    </Container>
  );
};
