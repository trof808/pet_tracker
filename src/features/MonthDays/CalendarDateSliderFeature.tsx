import { JSX } from 'react';
import styles from './CalendarDateSlider.module.css';
import { useSelectCurrentDay } from './hooks/useSelectCurrentDay';

export const CalendarDateSlider = (): JSX.Element => {
  const { formattedDates, selectedDay, handleDateClick } = useSelectCurrentDay();
  console.log(1);
  return (
    <div className={styles.sliderContainer}>
      {formattedDates.map(({ day, weekday }) => (
        // Вынести в компонент
        <div
          // Лучше использовать библиотеку classnames
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
