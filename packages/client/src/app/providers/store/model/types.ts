import { UserSchema } from '@/entities/user';
import { GameState } from '@/entities/game';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  game: GameState;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
