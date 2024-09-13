export const shuffleCards = (array: string[]) =>
  array.sort(() => Math.random() - 0.5);
