import { Button } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { saveTheme } from '@/shared/api/themeService';
import { useUserData } from '@/entities/user';
import { setTheme, saveThemeToLocalStorage } from '../model';

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  const { user } = useUserData();

  const handleThemeToggle = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
    saveThemeToLocalStorage(newTheme);

    if (user) {
      try {
        await saveTheme(user.id, newTheme);
      } catch (error) {
        console.error('Ошибка при сохранении темы на сервере', error);
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
      {theme === 'dark'
        ? 'Переключиться на светлую тему'
        : 'Переключиться на темную тему'}
    </Button>
  );
};
