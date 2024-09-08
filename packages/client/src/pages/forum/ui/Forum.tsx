import { NavLink } from 'react-router-dom';
import { Anchor, Container, Stack } from '@mantine/core';
import { ForumTopicList } from '@/widgets';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './Forum.module.scss';

export const Forum = () => (
  <div className={cls.root}>
    <Container flex={1} h="100%">
      <Stack gap={30} h="100%">
        <ForumTopicList className={cls.content} />

        <Anchor
          component={NavLink}
          to={routePaths[RouteNames.MAIN]}
          c="var(--text-color)"
          underline="never"
          fw={500}
          ml="auto"
        >
          Вернуться на главную
        </Anchor>
      </Stack>
    </Container>
  </div>
);
