import { rtkApi } from '@/shared/api/rtkApi';
import { SERVER_API_URL } from '@/shared/config/env';
import { Reaction } from './types';

const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getReactions: build.query<Reaction[], void>({
      query: () => ({
        url: `${SERVER_API_URL}/api/v1/reactions`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetReactionsQuery } = api;
