import {
  FC,
  PropsWithChildren,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import { Box, LoadingOverlay } from '@mantine/core';
import { loadUserData, useUserData } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/store';
import { setTheme } from '@/features/theming';
import { loadTheme } from '@/shared/api/themeService';

export const AuthInitializeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const { user } = useUserData();
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const initializeApp = async () => {
      await dispatch(loadUserData());

      if (user) {
        try {
          const serverTheme = await loadTheme(user.id);
          dispatch(setTheme(serverTheme));
        } catch (error) {
          console.error('Не удалось загрузить тему с сервера');
        }
      }
      setIsInitialized(true);
    };

    if (!isInitialized) {
      initializeApp();
    }
  }, [dispatch, isInitialized, user]);

  if (!isInitialized) {
    return (
      <Box pos="relative" w="100%" h="100vh">
        <LoadingOverlay visible />
      </Box>
    );
  }

  if (children && isValidElement(children)) {
    return children;
  }

  return null;
};
