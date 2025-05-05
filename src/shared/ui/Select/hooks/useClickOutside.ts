import React, { useEffect } from 'react';

export const useClickOutside = (ref: React.RefObject<HTMLElement | null>, callback: () => void): void => {
  const handleClick = (e: MouseEvent) => {
    const target = e.target;
    if (ref.current && target instanceof HTMLElement && !ref.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
