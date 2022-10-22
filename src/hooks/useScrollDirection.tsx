import { useEffect, useRef, useState } from 'react';

const THRESHOLD = 0;

export const useScrollDirection = (): string => {
  const [scrollDirection, setScrollDirection] = useState('up');

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = (): void => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = (): void => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  return scrollDirection;
};
