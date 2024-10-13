import { generateSVG } from './generateSVG';

export const loadImage = (
  width: number,
  height: number,
  callback: (arg0: HTMLImageElement) => void,
) => {
  const svgString = generateSVG(width, height);
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  if (typeof window !== 'undefined') {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      callback(img);
    };
    img.onerror = (err) => {
      console.error('Ошибка загрузки изображения:', err);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }
};
