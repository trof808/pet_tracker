import { JSX, useState } from 'react';
import styles from '../Calendar.module.css';
import { MonthDropDown } from './CalendarMonthDropDown/MonthDropDown';

export const CalendarToolBar = (): JSX.Element => {
  const getMonthsNames = () => {
    return Array.from({ length: 12 }, (_, i) =>
      new Date(2025, i, 1).toLocaleString('default', { month: 'long' })
    );
  };

  const monthsNames = getMonthsNames();

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  return (
    <div className={styles.toolBar}>
      <div className={styles.toolBarDetails}>
        <MonthDropDown
          months={monthsNames}
          selectedMonth={selectedMonth}
          onChange={(month) => setSelectedMonth(month)}
        />
        <span className={styles.today}>Сегодня</span>
      </div>
    </div>
  );
};
