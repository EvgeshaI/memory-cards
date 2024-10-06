import { getRedirectUri, getYandexLink } from '../../lib';
import { useGetServiceIdQuery } from '../../api';

export const useYandexButton = () => {
  const redirectUri = getRedirectUri();
  const { data, isFetching } = useGetServiceIdQuery(redirectUri);

  return {
    href: data ? getYandexLink(data.service_id, redirectUri) : undefined,
    isLoading: isFetching,
  };
};
