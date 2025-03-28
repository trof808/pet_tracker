import { useRef, useState } from 'react';
import { IDs } from '../components/EventVisible';

type useHandleSwipeReturn = {
  elementRef: React.RefObject<HTMLDivElement | null>;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEnd: () => void;
};

export const useHandleSwipe = (
  id: IDs,
  onDone: (id: IDs) => void,
  onClick: (id: IDs) => void,
  onDelete: (id: IDs) => void
): useHandleSwipeReturn => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const minSwipeDistance = 80;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // useCallback
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === 0) return;

    const touchMoveX = e.touches[0].clientX;
    const realDistance = touchMoveX - touchStartX;

    let visualDistance;
    const maxOffset = 40;
    if (realDistance > maxOffset) visualDistance = maxOffset;
    if (realDistance < -maxOffset) visualDistance = -maxOffset;

    // Меняем положение элемента через ref
    if (elementRef.current) {
      elementRef.current.style.transform = `translateX(${visualDistance}px)`;
    }

    setSwipeDistance(realDistance);
  };

  // useCallback
  const handleTouchEnd = (): void => {
    if (elementRef.current) {
      elementRef.current.style.transform = 'translateX(0)';
      elementRef.current.style.transition = 'transform 0.3s ease'; // Плавное возвращение
    }

    if (swipeDistance > minSwipeDistance) {
      onDone(id);
    } else if (swipeDistance < -minSwipeDistance) {
      onDelete(id);
    } else {
      onClick(id);
    }

    setSwipeDistance(0);
    setTouchStartX(0);
  };

  return {
    elementRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
