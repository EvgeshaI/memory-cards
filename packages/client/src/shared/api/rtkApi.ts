import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YANDEX_API_URL } from '@/shared/config/env';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: YANDEX_API_URL,
  }),
  endpoints: () => ({}),
});
