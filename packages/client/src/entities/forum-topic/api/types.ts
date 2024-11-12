export interface TopicCommentReaction {
  id: string | number;
  emoji: string;
  count: number;
  isActive: boolean;
}

export interface TopicComment {
  id: string | number;
  author: string;
  avatar: string | null;
  text: string;
  date: string;
  reactions: TopicCommentReaction[];
}

export interface TopicDetails {
  id: string | number;
  title: string;
  description: string;
  author: string;
  comments: TopicComment[];
}

export interface Topic {
  id: string | number;
  title: string;
  description: string;
  author: string;
  commentsCount: number;
}
