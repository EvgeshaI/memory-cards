import { UserSchema } from '@/entities/user';
import { GameSchema } from '@/entities/game';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  game: GameSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
