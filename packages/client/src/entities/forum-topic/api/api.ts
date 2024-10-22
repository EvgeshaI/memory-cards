import { rtkApi } from '@/shared/api/rtkApi';
import { SERVER_API_URL } from '@/shared/config/env';
import { Topic, TopicDetails } from './types';

const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getTopics: build.query<Topic[], void>({
      query: () => ({
        url: `${SERVER_API_URL}/api/v1/forum/topics`,
        method: 'GET',
      }),
    }),
    getTopicById: build.query<TopicDetails, string | number>({
      query: (topicId) => ({
        url: `${SERVER_API_URL}/api/v1/forum/topics/${topicId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTopicByIdQuery, useGetTopicsQuery } = api;
