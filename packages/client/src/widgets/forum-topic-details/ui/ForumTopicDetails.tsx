import { Stack, Title } from '@mantine/core';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import { AddCommentForm } from '@/features/forum-comment/add';
import {
  FORUM_TOPIC_COMMENTS,
  ForumCommentCard,
} from '@/entities/forum-comment';
import { Topic, TopicCard } from '@/entities/forum-topic';
import { Card, ScrollArea } from '@/shared/ui';
import { ForumTopicDetailsSkeleton } from './ForumTopicDetailsSkeleton';
import cls from './ForumTopicDetails.module.scss';

interface Props {
  topic: Topic;
  className?: string;
}

export const ForumTopicDetails: FC<Props> = (props) => {
  const { topic, className } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Временно, для тестирования
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <ForumTopicDetailsSkeleton className={className} />;
  }

  return (
    <div className={clsx(cls.root, className)}>
      <Stack gap={30} h="100%">
        <Title c="var(--text-color)">{topic.title}</Title>

        <Stack className={cls.blocks} gap={15} h="100%">
          <TopicCard view="description" className={cls.topic} topic={topic} />

          <Card className={cls.card}>
            <Stack h="100%" gap={40}>
              <ScrollArea className={cls.comments}>
                <Stack gap={15}>
                  {FORUM_TOPIC_COMMENTS.map((comment) => (
                    <ForumCommentCard key={comment.id} comment={comment} />
                  ))}
                </Stack>
              </ScrollArea>

              <div className={cls.form}>
                <AddCommentForm />
              </div>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
};
