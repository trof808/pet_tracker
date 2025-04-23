import { JSX } from 'react';
import styles from './CalendarDateSlider.module.css';
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FiltersDate, setDate } from '../../store/slices/filtersSlice';

// переписать на date-fns
export const CalendarDateSlider = (): JSX.Element => {
  const currentDate = useSelector(({ filters }: { filters: { date: FiltersDate }}) => filters.date);
  const dispatch = useDispatch();

  const [yearStr, monthStr, dayStr] = currentDate.split('-');
  const selectedDay = parseInt(dayStr);

  const dates = eachDayOfInterval({
    start: startOfMonth(new Date(currentDate)),
    end: endOfMonth(new Date(currentDate)),
  });
  const formattedDates = dates.map((date) => ({
    day: parseInt(format(date, 'd')),
    weekday: format(date, 'EEEEEE', { locale: ru }),
  }));

  const handleDateClick = (day: number) => {
    const newDayStr = day.toString().padStart(2, '0');
    const newDate = `${yearStr}-${monthStr}-${newDayStr}`;
    dispatch(setDate(newDate));
  };

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
