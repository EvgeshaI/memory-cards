import { Reaction } from '@/entities/reaction';
import { useSetCommentReactionMutation } from '@/entities/forum-comment';

interface UseReactionButtonPayload {
  commentId: string | number;
  reaction: Reaction;
  onSelect?: (reaction: Reaction) => void;
  onUpdate?: (reaction: Reaction) => void;
  onError?: (reaction: Reaction) => void;
}

export const useReactionButton = ({
  reaction,
  commentId,
  onSelect,
  onUpdate,
  onError,
}: UseReactionButtonPayload) => {
  const [setCommentReactionMutation] = useSetCommentReactionMutation();

  const setReaction = async () => {
    onSelect?.(reaction);

    try {
      await setCommentReactionMutation({
        reactionId: reaction.id,
        commentId,
      }).unwrap();

      onUpdate?.(reaction);
    } catch (e) {
      onError?.(reaction);
    }
  };

  return {
    setReaction,
  };
};
