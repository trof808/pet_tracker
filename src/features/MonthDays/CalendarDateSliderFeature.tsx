import { JSX } from 'react';
import styles from './CalendarDateSlider.module.css';
import { useSelectCurrentDay } from './hooks/useSelectCurrentDay';
import { CalendarDateSliderItem } from '../../entities/calendar/ui/CalendarDateSliderItem/CalendarDateSliderItem';
import { useSmoothSlide } from './hooks/useSmoothSlide';

export const CalendarDateSlider = (): JSX.Element => {
  const { formattedDates, selectedDay, handleDateClick } = useSelectCurrentDay();
  const activeItemRef = useSmoothSlide(selectedDay);


  return (
    <div className={styles.sliderContainer}>
      {formattedDates.map(({ day, weekday }) => (
        <CalendarDateSliderItem
          ref={day === selectedDay ? activeItemRef : null}
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
