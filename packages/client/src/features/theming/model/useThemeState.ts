import { THEME_KEY } from '@/shared/constants/storageKeys';
import { Theme } from '@/shared/constants/theme';

export const loadThemeFromLocalStorage = (): Theme => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  return storedTheme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
};

export const saveThemeToLocalStorage = (theme: Theme) => {
  localStorage.setItem(THEME_KEY, theme);
};
