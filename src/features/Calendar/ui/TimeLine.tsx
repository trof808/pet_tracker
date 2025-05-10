import { JSX, useEffect, useState } from 'react';
import styles from '../Calendar.module.css';

// Константы можно вынести выше компонента
const MINUTES_IN_HOUR = 60;
const HOUR_HEIGHT_PX = 70;

const ONE_MINUTE = 60000;
const MIN_LINE_POSITION = 92;

export const TimeLine = (): JSX.Element => {
  const [topPosition, setTopPosition] = useState(0);

  const updateLinePosition = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    const minutesSinceMidnight = hours * MINUTES_IN_HOUR + minutes;
    const pixelPerMinute = HOUR_HEIGHT_PX / MINUTES_IN_HOUR;

    const position = MIN_LINE_POSITION + minutesSinceMidnight * pixelPerMinute;

    setTopPosition(position);
  };

  useEffect(() => {
    updateLinePosition();
    const timerId = setInterval(() => {
      updateLinePosition();
    }, ONE_MINUTE);

    // Очищаем чтобы не было утечек памяти
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.timeLine} style={{ top: `${topPosition}px` }} />
  );
};
