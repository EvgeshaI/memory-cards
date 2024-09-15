export const imageCache: { [url: string]: HTMLImageElement } = {};

export const preloadImages = async (urls: string[]) => {
  const promises = urls.map((url) => {
    if (!imageCache[url]) {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          imageCache[url] = img;
          resolve();
        };
        img.onerror = () => {
          console.error(`Ошибка загрузки изображения: ${url}`);
          reject();
        };
      });
    }
    return Promise.resolve();
  });
  return Promise.all(promises);
};
