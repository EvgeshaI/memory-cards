import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { saveTheme } from '@/shared/api/themeService';
import { useUserData } from '@/entities/user';
import { Theme } from '@/shared/constants/theme';
import { setTheme, saveThemeToLocalStorage } from '../model';

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const { user } = useUserData();

  const handleThemeToggle = async () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    dispatch(setTheme(newTheme));
    saveThemeToLocalStorage(newTheme);

    if (user) {
      try {
        await saveTheme(user.id, newTheme);
      } catch (error) {
        showNotification({
          title: 'Ошибка',
          message: 'Ошибка при сохранении темы на сервере',
          color: 'red',
        });
      }
    }
  };

  return (
    <Button
      fullWidth
      radius="md"
      size="md"
      mt="20px"
      color="var(--accent-color)"
      onClick={handleThemeToggle}
    >
      {theme === Theme.DARK
        ? 'Переключиться на светлую тему'
        : 'Переключиться на темную тему'}
    </Button>
  );
};
