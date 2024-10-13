export interface GameState {
  openCards: number[];
  matchedCards: number[];
  cardAnimations: Record<number, any>;
  numCards: number;
  emojis: string[];
  gameTime: number;
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
