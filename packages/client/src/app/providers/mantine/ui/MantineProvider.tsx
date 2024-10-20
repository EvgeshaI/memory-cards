import { MantineProvider as Provider } from '@mantine/core';
import { useEffect, PropsWithChildren } from 'react';
import { useAppSelector } from '@/shared/lib/store';

export const MantineProvider = ({ children }: PropsWithChildren) => {
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return <Provider>{children}</Provider>;
};
