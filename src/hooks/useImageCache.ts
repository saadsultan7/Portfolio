import { useState, useEffect } from 'react';

const useImageCache = (imageSrcs: string[]) => {
  const [cachedImages, setCachedImages] = useState<string[]>([]);

  useEffect(() => {
    const cacheImages = async () => {
      const promises = imageSrcs.map(async (src) => {
        const cachedSrc = localStorage.getItem(src);
        if (cachedSrc) {
          return cachedSrc;
        } else {
          try {
            const response = await fetch(src);
            const blob = await response.blob();
            const reader = new FileReader();
            return new Promise<string>((resolve) => {
              reader.onloadend = () => {
                const base64data = reader.result as string;
                localStorage.setItem(src, base64data);
                resolve(base64data);
              };
              reader.readAsDataURL(blob);
            });
          } catch (error) {
            console.error('Error caching image:', error);
            return src; // Fallback to original source if caching fails
          }
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
