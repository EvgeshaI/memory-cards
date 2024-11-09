import { rtkApi } from '@/shared/api/rtkApi';
import { SERVER_API_URL } from '@/shared/config/env';
import { CreateTopicPayload, Topic, TopicDetails } from './types';

const api = rtkApi
  .enhanceEndpoints({ addTagTypes: ['Topics'] })
  .injectEndpoints({
    endpoints: (build) => ({
      getTopics: build.query<Topic[], void>({
        query: () => ({
          url: `${SERVER_API_URL}/api/v1/topics`,
          method: 'GET',
        }),
        providesTags: ['Topics'],
      }),
      getTopicById: build.query<TopicDetails, string | number>({
        query: (topicId) => ({
          url: `${SERVER_API_URL}/api/v1/topics/${topicId}`,
          method: 'GET',
        }),
      }),
      createTopic: build.mutation<void, CreateTopicPayload>({
        query: (body) => ({
          url: `${SERVER_API_URL}/api/v1/topics`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Topics'],
      }),
    }),
  });

export const {
  useGetTopicByIdQuery,
  useGetTopicsQuery,
  useCreateTopicMutation,
} = api;
