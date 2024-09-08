export const times = <T>(count: number, callback: (index: number) => T): T[] =>
  new Array(count).fill(0).map((_, index) => callback(index));
