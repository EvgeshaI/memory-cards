interface FullscreenElement extends HTMLElement {
  requestFullscreen(options?: FullscreenOptions): Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface DocumentFullscreenElement extends Document {
  exitFullscreen(): Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  fullscreenElement: Element | null;
  mozFullScreenElement: Element | null;
  webkitFullscreenElement: Element | null;
  msFullscreenElement: Element | null;
}

export const enterFullscreen = async (element: FullscreenElement) => {
  try {
    if (element.requestFullscreen) {
      await element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      await element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      await element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      await element.msRequestFullscreen();
    }
  } catch (error) {
    console.error('Не удалось перейти в полноэкранный режим:', error);
  }
};

export const exitFullscreen = async () => {
  const documentElement = document as DocumentFullscreenElement;
  try {
    if (documentElement.exitFullscreen) {
      await documentElement.exitFullscreen();
    } else if (documentElement.mozCancelFullScreen) {
      await documentElement.mozCancelFullScreen();
    } else if (documentElement.webkitExitFullscreen) {
      await documentElement.webkitExitFullscreen();
    } else if (documentElement.msExitFullscreen) {
      await documentElement.msExitFullscreen();
    }
  } catch (error) {
    console.error('Не удалось выйти из полноэкранного режима:', error);
  }
};

export const isFullscreen = () => {
  const documentElement = document as DocumentFullscreenElement;
  return !!(
    documentElement.fullscreenElement ||
    documentElement.mozFullScreenElement ||
    documentElement.webkitFullscreenElement ||
    documentElement.msFullscreenElement
  );
};
