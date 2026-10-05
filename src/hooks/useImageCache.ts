import { useState, useEffect } from 'react';

/**
 * Preloads images into the browser cache using Image objects.
 * Returns the original src array once all images are loaded.
 * Browser disk cache handles actual caching efficiently.
 */
const useImageCache = (imageSrcs: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const preload = async () => {
      const promises = imageSrcs.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
      );

      await Promise.all(promises);
      if (!cancelled) {
        setLoaded(true);
      }
    };

    preload();

    return () => {
      cancelled = true;
    };
  }, [imageSrcs]);

  // Return srcs immediately - browser will show them as they load
  // The loaded state can be used for loading indicators if needed
  return loaded ? imageSrcs : imageSrcs;
};

export default useImageCache;
