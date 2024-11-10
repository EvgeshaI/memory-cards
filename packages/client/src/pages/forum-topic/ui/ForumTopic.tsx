import { Navigate, NavLink, useParams } from 'react-router-dom';
import { Anchor, Container, Stack } from '@mantine/core';
import { ForumTopicDetails } from '@/widgets';
import { RouteNames, routePaths } from '@/shared/constants/router';
import cls from './ForumTopic.module.scss';

export const ForumTopic = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to={routePaths[RouteNames.FORUM]} replace />;
  }

  return (
    <div className={cls.root}>
      <Container flex={1} h="100%">
        <Stack gap={30} h="100%">
          <ForumTopicDetails className={cls.content} topicId={id} />

          <Anchor
            component={NavLink}
            to={routePaths[RouteNames.FORUM]}
            c="var(--text-color)"
            underline="never"
            fw={500}
            ml="auto"
          >
            Вернуться к списку топиков
          </Anchor>
        </Stack>
      </Container>
    </div>
  );
};
