import { Container, Stack } from '@mantine/core';
import { ForumTopicList } from '@/widgets';
import cls from './Forum.module.scss';

export const Forum = () => (
  <div className={cls.root}>
    <Container flex={1} h="100%">
      <Stack gap={30} h="100%">
        <ForumTopicList className={cls.content} />
      </Stack>
    </Container>
  </div>
);
