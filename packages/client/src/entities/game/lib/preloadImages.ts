export const preloadImages = async (
  urls: string[],
): Promise<{ [url: string]: HTMLImageElement }> => {
  const imageCache: { [url: string]: HTMLImageElement } = {};

  await Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            imageCache[url] = img;
            resolve();
          };
          img.onerror = () => reject();
        }),
    ),
  );

  return imageCache;
};
