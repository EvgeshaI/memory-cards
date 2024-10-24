import dayjs from 'dayjs';
import { memo, ReactNode } from 'react';
import { Group, Stack, Text, Avatar } from '@mantine/core';
import { Comment } from '../../api';

interface CommentCardProps {
  comment: Comment;
  className?: string;
  reactionListSlot?: ReactNode;
  addReactionSlot?: ReactNode;
  replySlot?: ReactNode;
}

export const CommentCard = memo(
  ({
    comment,
    className,
    reactionListSlot,
    addReactionSlot,
    replySlot,
  }: CommentCardProps) => (
    <Stack className={className} gap={10}>
      <Group gap={20}>
        <Avatar size={40} alt="Аватар" src={comment.avatar} />

        <Stack gap={5}>
          <Text fw={400} fz={14} c="var(--text-color)" lh="100%">
            {comment.author}
          </Text>
          <Text fw={300} fz={8} c="var(--text-color)" lh="100%">
            {dayjs(comment.date).fromNow()}
          </Text>
        </Stack>
      </Group>

      <Text fz={12} c="var(--dark-text-color)">
        {comment.text}
      </Text>

      <Group gap={10}>
        {reactionListSlot}

        {addReactionSlot}
      </Group>

      {replySlot}
    </Stack>
  ),
);
