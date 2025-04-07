import { JSX } from 'react';
import styles from '../Calendar.module.css';

type CalendarHourSlotProps = {
  hour: number;
};

export const CalendarHourSlot = ({
  hour,
}: CalendarHourSlotProps): JSX.Element => {
  return (
    <div className={styles.timeSlot} key={hour}>
      <div className={styles.timeLabel}>{`${hour}`.padStart(2, '0')}:00</div>
    </div>
  );
};
