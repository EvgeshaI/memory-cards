import clsx from 'clsx';
import { memo } from 'react';
import { Button } from '@mantine/core';
import { ReactionEmoji, Reaction } from '@/entities/reaction';
import { useReactionButton } from '../../model/hooks/useReactionButton';
import cls from './ReactionButton.module.scss';

interface Props {
  commentId: string | number;
  reaction: Reaction;
  count: number;
  isActive: boolean;
  onSelect?: (reaction: Reaction) => void;
  onUpdate?: (reaction: Reaction) => void;
  onError?: (reaction: Reaction) => void;
}

export const ReactionButton = memo(
  ({
    commentId,
    reaction,
    count,
    isActive,
    onSelect,
    onUpdate,
    onError,
  }: Props) => {
    const { setReaction } = useReactionButton({
      commentId,
      reaction,
      onSelect,
      onUpdate,
      onError,
    });

    if (count <= 0) {
      return null;
    }

    return (
      <Button
        className={clsx(cls.root, { [cls.active]: isActive })}
        classNames={{ section: cls.section }}
        variant="filled"
        size="compact-xs"
        leftSection={<ReactionEmoji reaction={reaction} />}
        onClick={setReaction}
      >
        {count}
      </Button>
    );
  },
);
