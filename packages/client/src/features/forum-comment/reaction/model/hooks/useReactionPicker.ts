import { useState } from 'react';
import { useSetCommentReactionMutation } from '@/entities/forum-comment';
import { Reaction, useGetReactionsQuery } from '@/entities/reaction';

interface UseReactionPickerPayload {
  commentId: string | number;
  onSelect?: (reaction: Reaction) => void;
  onUpdate?: (reaction: Reaction) => void;
  onError?: (reaction: Reaction) => void;
}

export const useReactionPicker = ({
  commentId,
  onSelect,
  onUpdate,
  onError,
}: UseReactionPickerPayload) => {
  const { data: reactions = [], isFetching: isReactionsFetching } =
    useGetReactionsQuery();
  const [setCommentReactionMutation] = useSetCommentReactionMutation();
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const togglePicker = () => setIsPickerOpen((o) => !o);

  const setReaction = (reaction: Reaction) => async () => {
    setIsPickerOpen(false);
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
    reactions,
    isLoading: isReactionsFetching,
    isPickerOpen,
    setIsPickerOpen,
    togglePicker,
    setReaction,
  };
};
