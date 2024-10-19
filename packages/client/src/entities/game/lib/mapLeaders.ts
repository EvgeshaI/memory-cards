import { Leader } from '@/entities/game/model/types';

interface MyField {
  name: string;
  avatar?: string;
  count: number;
}

interface LeaderEntry {
  data: {
    memoCardsTime: number;
    myField: MyField;
  };
}

export const mapLeaders = (data: LeaderEntry[]): Leader[] =>
  data.map((entry) => ({
    name: entry.data.myField.name,
    avatar: entry.data.myField.avatar || '',
    count: entry.data.memoCardsTime,
  }));
