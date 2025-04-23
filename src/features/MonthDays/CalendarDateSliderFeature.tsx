import { JSX } from 'react';
import styles from './CalendarDateSlider.module.css';
import { useSelectCurrentDay } from './hooks/useSelectCurrentDay';

// переписать на date-fns
export const CalendarDateSlider = (): JSX.Element => {
  const { formattedDates, selectedDay, handleDateClick } = useSelectCurrentDay();

  return (
    <div className={styles.sliderContainer}>
      {formattedDates.map(({ day, weekday }) => (
        <div
          className={`${styles.dateItem} ${selectedDay === day ? styles.active : ''}`}
          key={day}
          onClick={() => handleDateClick(day)}
        >
          <span className={styles.day}>{day}</span>
          <span className={styles.weekday}>{weekday}</span>
        </div>
      ))}
    </div>
  );
};
