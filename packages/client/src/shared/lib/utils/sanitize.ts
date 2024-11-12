import { useCallback } from 'react';
import DOMPurify from 'dompurify';

export const useSanitizedSubmit = <T extends Record<string, unknown>>(
  onSubmit: (data: T) => void,
) =>
  useCallback(
    (data: T) => {
      const sanitizedData = Object.keys(data).reduce((acc, key) => {
        const typedKey = key as keyof T;
        acc[typedKey] =
          typeof data[typedKey] === 'string'
            ? (DOMPurify.sanitize(data[typedKey] as string) as T[keyof T])
            : data[typedKey];
        return acc;
      }, {} as T);

      onSubmit(sanitizedData);
    },
    [onSubmit],
  );
