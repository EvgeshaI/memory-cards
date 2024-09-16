import { API_KEY_PIXABAY } from '@/shared/constants/config';
import { rtkApi } from './rtkApi';

interface PixabayImage {
  previewURL: string;
}

interface GetImagesResponse {
  hits: PixabayImage[];
}

const pixabayApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getImages: build.query<GetImagesResponse, number>({
      query: () => ({
        url: 'https://pixabay.com/api/',
        method: 'GET',
        params: {
          key: API_KEY_PIXABAY,
          q: 'patterns',
          image_type: 'illustration',
          colors: 'blue,violet',
        },
      }),
      transformResponse: (response: GetImagesResponse, _, numCards) => {
        const selectedImages = response.hits.slice(0, numCards / 2);
        return { hits: [...selectedImages, ...selectedImages] };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetImagesQuery, useLazyGetImagesQuery } = pixabayApi;
