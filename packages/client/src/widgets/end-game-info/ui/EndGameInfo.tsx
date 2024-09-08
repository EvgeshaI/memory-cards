import { Button, Group, Text } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { PaperContainer } from '@/shared/ui';
import cls from './EndGameInfo.module.scss';

export const EndGameInfo = () => (
  <PaperContainer text="Конец игры">
    <Group justify="space-between" w="50%" m="0 auto 20px">
      <div>
        <Text fz="22px">время</Text>
        <Text fz="16px">20:00</Text>
      </div>
      <div>
        <Text fz="22px">счет</Text>
        <Text fz="16px">2020</Text>
      </div>
    </Group>
    <Button w="70%" radius="md" size="md" mb="20px" color="var(--accent-color)">
      <NavLink to={routePaths[RouteNames.START_GAME]} className={cls.link}>
        играть снова
      </NavLink>
    </Button>
    <Button w="70%" radius="md" size="md" color="var(--accent-color)">
      на главную
    </Button>
  </PaperContainer>
);
