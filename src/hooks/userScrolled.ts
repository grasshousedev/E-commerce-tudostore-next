import { useState, useEffect } from 'react';

export const useUserScrolled = () => {
  const [userScrolled, setUserScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setUserScrolled(false);
        return;
      }
      if (userScrolled) return;
      setUserScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return { userScrolled };
};
