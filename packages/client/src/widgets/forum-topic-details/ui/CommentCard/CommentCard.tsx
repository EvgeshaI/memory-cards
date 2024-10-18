import { memo, useCallback, useState } from 'react';
import { Group } from '@mantine/core';
import { Reaction } from '@/entities/reaction';
import {
  ForumCommentCard,
  Comment,
  CommentReaction,
} from '@/entities/forum-comment';
import {
  CommentReactionButton,
  CommentReactionPicker,
} from '@/features/forum-comment';
import { updateReactions } from '../../lib';

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard = memo(({ comment }: CommentCardProps) => {
  const [reactions, setReactions] = useState<CommentReaction[]>(
    comment.reactions,
  );

  const onEmojiSelect = useCallback((newReaction: Reaction) => {
    setReactions((prevState) =>
      updateReactions({ reactions: prevState, newReaction }),
    );
  }, []);

  return (
    <ForumCommentCard
      comment={comment}
      reactionListSlot={
        reactions.length !== 0 && (
          <Group gap={5}>
            {reactions.map((reaction) => (
              <CommentReactionButton
                key={reaction.id}
                commentId={comment.id}
                reaction={{
                  id: reaction.id,
                  emoji: reaction.emoji,
                }}
                isActive={reaction.isActive}
                count={reaction.count}
                onSelect={onEmojiSelect}
                onError={onEmojiSelect}
              />
            ))}
          </Group>
        )
      }
      addReactionSlot={
        <CommentReactionPicker
          commentId={comment.id}
          onSelect={onEmojiSelect}
          onError={onEmojiSelect}
        />
      }
    />
  );
});
