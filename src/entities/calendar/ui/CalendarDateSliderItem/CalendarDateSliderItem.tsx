import { JSX } from "react";
import styles from './CalendarDateSliderItem.module.css';
import cn from 'classnames';

type CalendarDateSliderItemProps = {
  day: number, 
  weekday: string,
  selectedDay: number,
  onClick: (day: number) => void,
}

export const CalendarDateSliderItem = ({day, weekday, selectedDay, onClick}: CalendarDateSliderItemProps): JSX.Element => {
  return (
    <div
    // Лучше использовать библиотеку classnames
    className={cn(styles.dateItem, {
      [styles.active]: selectedDay === day,
    })}
    key={day}
    onClick={() => onClick(day)}
  >
    <span className={styles.day}>{day}</span>
    <span className={styles.weekday}>{weekday}</span>
  </div>
  )
};