import { Button } from '@mantine/core';
import { useFullscreen } from '@/shared/lib';

export const FullscreenButton = () => {
  const { fullscreen, toggleFullscreen } = useFullscreen();

  return (
    <Button
      fullWidth
      radius="md"
      size="md"
      color="var(--accent-color)"
      onClick={toggleFullscreen}
      mt="20px"
    >
      {fullscreen
        ? 'Выйти из полноэкранного режима'
        : 'Перейти в полноэкранный режим'}
    </Button>
  );
};
