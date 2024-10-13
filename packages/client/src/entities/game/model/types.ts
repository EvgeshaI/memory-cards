interface CardAnimation {
  progress: number;
  isOpening: boolean;
}

export interface GameState {
  numCards: number;
  emojis: string[];
  gameTime: number;
  cardAnimations: Record<number, CardAnimation>;
  openCards: number[];
  matchedCards: number[];
  leaders: Array<Leader>;
}

export interface Leader {
  avatar?: string;
  name: string;
  count: number;
}
export interface NotificationProps {
  type: 'success' | 'error';
  message: string;
}
