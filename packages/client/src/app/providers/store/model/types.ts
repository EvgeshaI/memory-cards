import { UserSchema } from '@/entities/user';
import { GameSchema } from '@/entities/game';
import { ThemeState } from '@/features/theming/model/themeSlice';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  game: GameSchema;
  theme: ThemeState;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
