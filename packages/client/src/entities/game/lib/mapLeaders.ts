import { Leader } from '@/entities/game'

export const mapLeaders = (data: any[]): Leader[] =>
  data.map((entry) => ({
    name: entry.data.myField.name,
    avatar: entry.data.myField.avatar || '',
    count: entry.data.memoCardsTime,
  }));
