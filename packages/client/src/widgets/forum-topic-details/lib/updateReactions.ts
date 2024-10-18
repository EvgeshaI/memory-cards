import { Reaction } from '@/entities/reaction';
import { CommentReaction } from '@/entities/forum-comment';

interface UpdateReactionsPayload {
  reactions: CommentReaction[];
  newReaction: Reaction;
}

export const updateReactions = ({
  reactions,
  newReaction,
}: UpdateReactionsPayload) => {
  let hasReaction = false;

  const updatedReactions = reactions.map((reaction) => {
    if (reaction.id === newReaction.id) {
      hasReaction = true;

      return {
        ...reaction,
        count: reaction.isActive ? reaction.count - 1 : reaction.count + 1,
        isActive: !reaction.isActive,
      };
    }

    if (reaction.isActive) {
      return {
        ...reaction,
        count: reaction.count - 1,
        isActive: false,
      };
    }

    return reaction;
  });

  if (!hasReaction) {
    updatedReactions.push({
      id: newReaction.id,
      emoji: newReaction.emoji,
      count: 1,
      isActive: true,
    });
  }

  return updatedReactions.filter((reaction) => reaction.count > 0);
};
