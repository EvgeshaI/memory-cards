import { Navigate, NavLink, useParams } from 'react-router-dom';
import { Anchor, Container, Stack } from '@mantine/core';
import { FORUM_TOPICS } from '@/entities/forum-topic';
import { ForumTopicDetails } from '@/widgets';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './ForumTopic.module.scss';

export const ForumTopic = () => {
  const { id } = useParams<{ id: string }>();
  const topic = FORUM_TOPICS.find((item) => item.id === id);

  if (!topic) {
    return <Navigate to={routePaths[RouteNames.FORUM]} replace />;
  }

  return (
    <div className={cls.root}>
      <Container flex={1} h="100%">
        <Stack gap={30} h="100%">
          <ForumTopicDetails className={cls.content} topic={topic} />

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
};
