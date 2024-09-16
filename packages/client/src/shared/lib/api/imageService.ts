import { API_KEY_PIXABAY } from '@/shared/constants/config';

interface PixabayImage {
  previewURL: string;
}

export const fetchImages = async (numCards: number): Promise<string[]> => {
  try {
    const url = `https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=patterns&image_type=illustration&colors=blue,violet`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.hits) {
      const selectedImages = data.hits
        .slice(0, numCards / 2)
        .map((hit: PixabayImage) => hit.previewURL);
      const imagesForGame = [...selectedImages, ...selectedImages];
      return imagesForGame;
    }

    throw new Error('Изображения не найдены');
  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
    throw error;
  }
};
