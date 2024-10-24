import { Alert, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import {
  Topic,
  TopicCard,
  TopicCardSkeleton,
  useGetTopicsQuery,
} from '@/entities/forum-topic';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { times } from '@/shared/lib';

export const Topics = () => {
  const navigate = useNavigate();
  const { data: topics = [], isFetching } = useGetTopicsQuery();

  const onTopicClick = (topic: Topic) => () => {
    navigate(routePaths[RouteNames.FORUM_TOPIC](topic.id));
  };

  if (isFetching) {
    return (
      <Stack gap={15}>
        {times(5, (index) => (
          <TopicCardSkeleton key={index} />
        ))}
      </Stack>
    );
  }

  if (topics.length === 0) {
    return (
      <Alert
        variant="light"
        color="var(--text-color)"
        title="Ничего не найдено :("
        radius={50}
      />
    );
  }

  return (
    <Stack gap={15}>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          title={topic.title}
          commentsCount={topic.commentsCount}
          author={topic.author}
          onClick={onTopicClick(topic)}
        />
      ))}
    </Stack>
  );
};
