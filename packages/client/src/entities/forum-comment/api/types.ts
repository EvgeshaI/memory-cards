export interface CommentReaction {
  id: string | number;
  emoji: string;
  count: number;
  isActive: boolean;
}

export interface Comment {
  id: string | number;
  author: string;
  avatar: string | null;
  text: string;
  date: string;
  reactions: CommentReaction[];
}

export interface SetCommentReactionPayload {
  reactionId: string | number;
  commentId: string | number;
}
