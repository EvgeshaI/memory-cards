import React from 'react';
import { Button } from '@mantine/core';
import { enterFullscreen, exitFullscreen, isFullscreen } from '@/shared/lib';

export const FullscreenButton = () => {
  const [fullscreen, setFullscreen] = React.useState(isFullscreen());

  const handleClick = () => {
    const element = document.documentElement;

    if (fullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen(element);
    }

    setFullscreen(!fullscreen);
  };

  return (
    <Button
      fullWidth
      radius="md"
      size="md"
      color="var(--accent-color)"
      onClick={handleClick}
      mt="20px"
    >
      {fullscreen
        ? 'Выйти из полноэкранного режима'
        : 'Перейти в полноэкранный режим'}
    </Button>
  );
};
