import { JSX, useState } from 'react';
import styles from './CalendarDateSlider.module.css';
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import { ru } from 'date-fns/locale';

// переписать на date-fns
export const CalendarDateSlider = (): JSX.Element => {
  const now = new Date();

  const [selectedDate, setSelectedDate] = useState(now.getDate());

  const dates = eachDayOfInterval({
    start: startOfMonth(now),
    end: endOfMonth(now),
  });
  const formattedDates = dates.map((date) => ({
    day: parseInt(format(date, 'd')),
    weekday: format(date, 'EEEEEE', { locale: ru }),
  }));

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  return (
    <div className={styles.sliderContainer}>
      {formattedDates.map(({ day, weekday }) => (
        <div
          className={`${styles.dateItem} ${selectedDate === day ? styles.active : ''}`}
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
