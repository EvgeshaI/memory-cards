import { THEME_KEY } from '@/shared/constants/storageKeys';

export const loadThemeFromLocalStorage = (): 'light' | 'dark' => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  return storedTheme === 'dark' ? 'dark' : 'light';
};

export const saveThemeToLocalStorage = (theme: 'light' | 'dark') => {
  localStorage.setItem(THEME_KEY, theme);
};
