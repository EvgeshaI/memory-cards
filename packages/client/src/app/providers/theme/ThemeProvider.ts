import { useEffect, ReactNode, isValidElement } from 'react';
import { showNotification } from '@mantine/notifications';
import { useAppDispatch } from '@/shared/lib/store';
import { loadTheme } from '@/shared/api/themeService';
import { setTheme } from '@/features/theming';
import { useUserData } from '@/entities/user';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { user } = useUserData();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeTheme = async () => {
      if (user) {
        try {
          const serverTheme = await loadTheme(user.id);
          dispatch(setTheme(serverTheme));
        } catch (error) {
          showNotification({
            title: 'Ошибка',
            message: 'Не удалось загрузить тему с сервера',
            color: 'red',
          });
        }
      }
    };

    initializeTheme();
  }, [dispatch, user]);

  if (children && isValidElement(children)) {
    return children;
  }

  return null;
}
