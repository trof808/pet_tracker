import { JSX } from 'react';
import styles from './CalendarDateSlider.module.css';
import { useSelectCurrentDay } from './hooks/useSelectCurrentDay';
import { CalendarDateSliderItem } from '../../entities/calendar/ui/CalendarDateSliderItem/CalendarDateSliderItem';

export const CalendarDateSlider = (): JSX.Element => {
  const { formattedDates, selectedDay, handleDateClick } = useSelectCurrentDay();
  return (
    <div className={styles.sliderContainer}>
      {formattedDates.map(({ day, weekday }) => (
        <CalendarDateSliderItem
          day={day}
          key={day}
          weekday={weekday}
          selectedDay={selectedDay}
          onClick={() => handleDateClick(day)}
        />
      ))}
    </div>
  );
};
