import { rtkApi } from '@/shared/api/rtkApi';
import { SERVER_API_URL } from '@/shared/constants/api';
import { CommentReaction, SetCommentReactionPayload } from './types';

const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCommentReactionsById: build.query<CommentReaction[], string | number>({
      query: (commentId) => ({
        url: `${SERVER_API_URL}/api/v1/forum/comments/${commentId}/reactions`,
        method: 'GET',
      }),
    }),
    setCommentReaction: build.mutation<void, SetCommentReactionPayload>({
      query: (body) => ({
        url: `${SERVER_API_URL}/api/v1/forum/reactions`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetCommentReactionsByIdQuery,
  useSetCommentReactionMutation,
} = api;
