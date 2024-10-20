import { Button, Select, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { FullscreenButton, PaperContainer } from '@/shared/ui';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { gameActions, selectData } from '@/entities/game';
import { NotificationButton } from '@/features/notifications';
import { ThemeToggle } from '@/features/theming/ui/ThemeToggle';

export const GameSettings = () => {
  const dispatch = useAppDispatch();
  const game = useAppSelector(selectData);

  const handleChange = (value: string) => {
    dispatch(gameActions.setNumCards(+value));
  };
  return (
    <PaperContainer text="Настройки">
      <Text
        size="lg"
        mb="md"
        className="settings-header-text"
        color="var(--accent-color)"
      >
        выберите количество карточек
      </Text>
      <Select
        placeholder="6"
        data={['6', '12', '20']}
        variant="filled"
        radius="md"
        size="md"
        mb="20px"
        onChange={(value) => handleChange(value!)}
        value={`${game.numCards}`}
        defaultValue="6"
      />
      <Link to={routePaths[RouteNames.GAME]} style={{ textDecoration: 'none' }}>
        <Button fullWidth radius="md" size="md" color="var(--accent-color)">
          играть
        </Button>
      </Link>
      <FullscreenButton />
      <NotificationButton />
      <ThemeToggle />
    </PaperContainer>
  );
};
