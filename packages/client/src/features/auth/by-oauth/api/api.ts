import { rtkApi } from '@/shared/api/rtkApi';
import { SignInBody, GetServiceIdResponse } from './types';

const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getServiceId: build.query<GetServiceIdResponse, string>({
      query: (redirect_uri) => ({
        url: '/oauth/yandex/service-id',
        method: 'GET',
        params: {
          redirect_uri,
        },
      }),
    }),
    signIn: build.mutation<void, SignInBody>({
      query: (body) => ({
        url: '/oauth/yandex',
        method: 'POST',
        body: {
          code: body.code,
          redirect_uri: body.redirectUri,
        },
        credentials: 'include',
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useGetServiceIdQuery, useSignInMutation } = api;
