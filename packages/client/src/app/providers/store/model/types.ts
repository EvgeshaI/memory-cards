import { UserSchema } from '@/entities/user';
import { themeReducer } from '@/features/theming';
import { GameState } from '@/entities/game';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  game: GameState;
  theme: themeReducer;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
