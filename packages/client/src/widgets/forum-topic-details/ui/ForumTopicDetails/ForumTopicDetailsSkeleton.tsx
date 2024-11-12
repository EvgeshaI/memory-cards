import { Skeleton, Stack } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';
import { ForumCommentCardSkeleton } from '@/entities/forum-comment';
import { TopicCardSkeleton } from '@/entities/forum-topic';
import { times } from '@/shared/lib';
import { Card, ScrollArea } from '@/shared/ui';
import cls from './ForumTopicDetails.module.scss';

interface Props {
  className?: string;
}

export const ForumTopicDetailsSkeleton: FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={clsx(cls.root, className)}>
      <Stack gap={30} h="100%">
        <Skeleton width="100%" height={50} />

        <Stack className={cls.blocks} gap={15} h="100%">
          <TopicCardSkeleton className={cls.topic} />

          <Card className={cls.card}>
            <Stack h="100%" gap={40}>
              <ScrollArea className={cls.comments}>
                <Stack gap={15}>
                  {times(3, (index) => (
                    <ForumCommentCardSkeleton key={index} />
                  ))}
                </Stack>
              </ScrollArea>

              <div className={cls.form}>
                <Skeleton width="100%" height={60} />
              </div>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
};
