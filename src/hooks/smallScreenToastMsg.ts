import { useEffect, useState } from 'react';
import { toastSmallScreenCustom } from '../utils/toastSmallScreenCustom';

export const useSmallScreenToastMsg = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 963);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isSmallScreen };
};

export const checkSmallScrenAndShowMsg = (isSmallScreen: boolean, img: string, msg: string) => {
  if (isSmallScreen) {
    toastSmallScreenCustom(img, msg);
  }
};
