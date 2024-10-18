import clsx from 'clsx';
import { Stack, Title } from '@mantine/core';
import { Navigate } from 'react-router-dom';
import { AddCommentForm } from '@/features/forum-comment';
import { TopicCard, useGetTopicByIdQuery } from '@/entities/forum-topic';
import { Card, ScrollArea } from '@/shared/ui';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { ForumTopicDetailsSkeleton } from './ForumTopicDetailsSkeleton';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './ForumTopicDetails.module.scss';

interface ForumTopicDetailsProps {
  topicId: string | number;
  className?: string;
}

export const ForumTopicDetails = ({
  topicId,
  className,
}: ForumTopicDetailsProps) => {
  const { data: topic, isFetching } = useGetTopicByIdQuery(topicId);

  if (isFetching) {
    return <ForumTopicDetailsSkeleton className={className} />;
  }

  if (!topic) {
    return <Navigate to={routePaths[RouteNames.FORUM]} replace />;
  }

  return (
    <div className={clsx(cls.root, className)}>
      <Stack gap={30} h="100%">
        <Title c="var(--text-color)">{topic.title}</Title>

        <Stack className={cls.blocks} gap={15} h="100%">
          <TopicCard
            className={cls.topic}
            title={topic.description}
            author={topic.author}
            commentsCount={topic.comments.length}
          />

          <Card className={cls.card}>
            <Stack h="100%" gap={40}>
              <ScrollArea className={cls.comments}>
                <Stack gap={15}>
                  {topic.comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
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
