import { useEffect, useState } from 'react';
import {
  isFullscreen,
  enterFullscreen,
  exitFullscreen,
} from './fullscreenUtils';

export const useFullscreen = () => {
  const [fullscreen, setFullscreen] = useState(isFullscreen());

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

  return { fullscreen, toggleFullscreen };
};
