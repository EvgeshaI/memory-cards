import clsx from 'clsx';
import { CSSProperties } from 'react';
import { Reaction } from '../api';
import cls from './ReactionEmoji.module.scss';

interface ReactionEmojiProps {
  reaction: Reaction;
  className?: string;
  size?: number;
}

export const ReactionEmoji = ({
  className,
  reaction,
  size,
}: ReactionEmojiProps) => {
  const style: CSSProperties = {
    '--reaction-emoji-size': size ? `${size}px` : undefined,
  } as CSSProperties;

  return (
    <span
      className={clsx(cls.root, className)}
      style={style}
      role="img"
      aria-label="emoji"
    >
      {reaction.emoji}
    </span>
  );
};
