import { fetchImages } from '@/shared/lib/api/imageService';
import { preloadImages, imageCache } from './preloadImages';
import { shuffleCards } from './shuffleCards';

export const setupGameImages = async (numCards: number): Promise<string[]> => {
  const images = await fetchImages(numCards);

  const uncachedImages = images.filter((url) => !imageCache[url]);

  if (uncachedImages.length > 0) {
    await preloadImages(uncachedImages);
  }

  return shuffleCards(images);
};
