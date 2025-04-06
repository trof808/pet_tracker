// CalendarDateSlider.tsx
import { JSX, useState } from 'react';
import styles from './CalendarDateSlider.module.css';

const aprilDates: Array<{day: number, weekday: string}> = [
  { day: 1, weekday: 'вт' },
  { day: 2, weekday: 'ср' },
  { day: 3, weekday: 'чт' },
  { day: 4, weekday: 'пт' },
  { day: 5, weekday: 'сб' },
  { day: 6, weekday: 'вс' },
  { day: 7, weekday: 'пн' },
  { day: 8, weekday: 'вт' },
  { day: 9, weekday: 'ср' },
  { day: 10, weekday: 'чт' },
  { day: 11, weekday: 'пт' },
  { day: 12, weekday: 'сб' },
  { day: 13, weekday: 'вс' },
  { day: 14, weekday: 'пн' },
  { day: 15, weekday: 'вт' },
  { day: 16, weekday: 'ср' },
  { day: 17, weekday: 'чт' },
  { day: 18, weekday: 'пт' },
  { day: 19, weekday: 'сб' },
  { day: 20, weekday: 'вс' },
  { day: 21, weekday: 'пн' },
  { day: 22, weekday: 'вт' },
  { day: 23, weekday: 'ср' },
  { day: 24, weekday: 'чт' },
  { day: 25, weekday: 'пт' },
  { day: 26, weekday: 'сб' },
  { day: 27, weekday: 'вс' },
  { day: 28, weekday: 'пн' },
  { day: 29, weekday: 'вт' },
  { day: 30, weekday: 'ср' },
];


export const CalendarDateSlider = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  }

  return (
    <div className={styles.sliderContainer}>
      {aprilDates.map(({ day, weekday }) => (
        <div className={`${styles.dateItem} ${selectedDate === day ? styles.active : ''}`} key={day} onClick={() => handleDateClick(day)}>
          <span className={styles.day}>{day}</span>
          <span className={styles.weekday}>{weekday}</span>
        </div>
      ))}
    </div>
  );
};
