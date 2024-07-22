import { useEffect, useState } from 'react';

const loadImg = (src) => {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      resolve(image);
    };
  });
};

export const useWaitImageLoad = (srcs: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!srcs.length) return;
    const waitLoadAllImgs = async () => {
      for (let i = 0; i < srcs.length; i++) {
        await loadImg(srcs[i]);
      }
      setImagesLoaded(true);
    };
    waitLoadAllImgs();
  }, [srcs]);

  return { imagesLoaded };
};
