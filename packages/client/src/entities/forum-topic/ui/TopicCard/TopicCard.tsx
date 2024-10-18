import clsx from 'clsx';
import { Stack, Text } from '@mantine/core';
import { Card } from '@/shared/ui';
import cls from './TopicCard.module.scss';

interface TopicCardProps {
  title: string;
  commentsCount: number;
  author: string;
  className?: string;
  onClick?: () => void;
}

export const TopicCard = ({
  title,
  commentsCount,
  author,
  onClick,
  className,
}: TopicCardProps) => (
  <Card
    className={clsx(
      cls.root,
      { [cls.clickable]: onClick !== undefined },
      className,
    )}
    onClick={onClick}
  >
    <Stack gap={20}>
      <Text fw={700} fz={20} c="var(--text-color)">
        {title}
      </Text>

      <div className={cls.info}>
        <Text fz={14} c="var(--text-color)">
          <Text span>Комментарии:</Text>
          <Text span ml={20}>
            {commentsCount}
          </Text>
        </Text>

        <Text fz={14} c="var(--text-color)">
          <Text span>Автор:</Text>
          <Text span ml={20}>
            {author}
          </Text>
        </Text>
      </div>
    </Stack>
  </Card>
);
