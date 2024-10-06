import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { getRedirectUri } from '../../lib';
import { useSignInMutation } from '../../api';

export const useSignInByYandex = () => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [signIn, { isLoading: isSignInLoading }] = useSignInMutation();
  const [searchParams] = useSearchParams();
  const redirectUri = getRedirectUri();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      signIn({ code, redirectUri })
        .unwrap()
        .catch(() => {
          notifications.show({
            color: 'red',
            title: 'Ошибка',
            message: 'Не удалось авторизоваться через OAuth',
          });
        });
    }

    setIsInitialized(true);
  }, [redirectUri, searchParams, signIn]);

  return {
    isInitialized,
    isLoading: isSignInLoading,
  };
};
