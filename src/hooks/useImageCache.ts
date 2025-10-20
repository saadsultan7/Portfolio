import { useState, useEffect } from 'react';

const useImageCache = (imageSrcs: string[]) => {
  const [cachedImages, setCachedImages] = useState<string[]>([]);

  useEffect(() => {
    const cacheImages = async () => {
      const promises = imageSrcs.map(async (src) => {
        try {
          const cachedSrc = localStorage.getItem(src);
          if (cachedSrc) {
            return cachedSrc;
          } else {
            const response = await fetch(src);
            const blob = await response.blob();
            const reader = new FileReader();
            return new Promise<string>((resolve) => {
              reader.onloadend = () => {
                const base64data = reader.result as string;
                try {
                  // Try to store in localStorage
                  localStorage.setItem(src, base64data);
                  resolve(base64data);
                } catch (storageError) {
                  // If localStorage quota exceeded, use original source
                  if (storageError instanceof DOMException && storageError.name === 'QuotaExceededError') {
                    console.warn(`LocalStorage quota exceeded for image: ${src}`);
                    resolve(src); // Fallback to original source
                  } else {
                    throw storageError; // Re-throw if it's a different error
                  }
                }
              };
              reader.readAsDataURL(blob);
            });
          }
        } catch (error) {
          console.error('Error caching image:', error);
          return src; // Fallback to original source if any other error occurs
        }
      });

      const cachedSrcs = await Promise.all(promises);
      setCachedImages(cachedSrcs);
    };

    cacheImages();
  }, [imageSrcs]);

  return cachedImages;
};

export default useImageCache;