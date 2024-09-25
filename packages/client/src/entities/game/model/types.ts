export interface GameSchema {
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
