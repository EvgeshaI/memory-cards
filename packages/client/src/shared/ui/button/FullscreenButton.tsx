import React, { useEffect } from 'react';
import { Button } from '@mantine/core';
import { enterFullscreen, exitFullscreen, isFullscreen } from '@/shared/lib';

export const FullscreenButton = () => {
  const [fullscreen, setFullscreen] = React.useState(isFullscreen());

  useEffect(() => {
    const handleFullscreenChange = () => setFullscreen(isFullscreen());

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (fullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen(document.documentElement);
    }
  };

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
