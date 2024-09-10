import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { Stack, Text } from '@mantine/core';
import { Card } from '@/shared/ui';
import { Topic } from '../../model/types';
import cls from './TopicCard.module.scss';

interface Props {
  topic: Topic;
  renderTitle?: (topic: Topic) => ReactNode;
  className?: string;
  onClick?: (topic: Topic) => void;
}

export const TopicCard: FC<Props> = (props) => {
  const { topic, renderTitle, onClick, className } = props;

  const onClickHandler = () => onClick?.(topic);

  return (
    <Card
      className={clsx(
        cls.root,
        { [cls.clickable]: onClick !== undefined },
        className,
      )}
      onClick={onClickHandler}
    >
      <Stack gap={20}>
        <Text fw={700} fz={20} c="var(--text-color)">
          {renderTitle ? renderTitle(topic) : topic.title}
        </Text>

        <div className={cls.info}>
          <Text fz={14} c="var(--text-color)">
            <Text span>Комментарии:</Text>
            <Text span ml={20}>
              {topic.commentCount}
            </Text>
          </Text>

          <Text fz={14} c="var(--text-color)">
            <Text span>Автор:</Text>
            <Text span ml={20}>
              {topic.author}
            </Text>
          </Text>
        </div>
      </Stack>
    </Card>
  );
};
