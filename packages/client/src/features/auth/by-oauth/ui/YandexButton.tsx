import { ActionIcon } from '@mantine/core';
import { useYandexButton } from '../model/hooks/useYandexButton';

export const YandexButton = () => {
  const { href, isLoading } = useYandexButton();

  return (
    <ActionIcon
      title="Войти через yandex"
      component="a"
      color="var(--accent-color)"
      radius={50}
      size={40}
      href={href}
      loading={isLoading}
    >
      Я
    </ActionIcon>
  );
};
