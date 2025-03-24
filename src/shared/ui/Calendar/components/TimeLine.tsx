import { JSX, useEffect, useState } from "react";
import styles from '../Calendar.module.css';

export const TimeLine = (): JSX.Element => {
  const MINUTES_IN_HOUR = 60;
  const HOUR_HEIGHT_PX = 74;

  const ONE_MINUTE = 10000;
  const MIN_LINE_POSITION = 92;
  const [topPosition, setTopPosition] = useState(70);
  

  const updateLinePosition = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    const position = (hours * MINUTES_IN_HOUR + minutes) * (HOUR_HEIGHT_PX / MINUTES_IN_HOUR);

    const limitedPosition = Math.max(position, MIN_LINE_POSITION);
    setTopPosition(limitedPosition);
  };

  useEffect(() => {
    updateLinePosition()
    const timerId = setInterval(() => {
      updateLinePosition();
    }, ONE_MINUTE)

    return () => clearInterval(timerId)
  }, []);


  return (
    <div className={styles.timeLine} style={{ top: `${topPosition}px`}} />
  )
}