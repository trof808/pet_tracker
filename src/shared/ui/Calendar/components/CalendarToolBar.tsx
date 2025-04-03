import { JSX, useState } from 'react';
import styles from '../Calendar.module.css';

export const CalendarToolBar = (): JSX.Element => {
  const getMonthsNames = () => {
    return Array.from({ length: 12 }, (_, i) =>
      new Date(2025, i, 1).toLocaleString('default', { month: 'long' })
    );
  };

  const monthsNames = getMonthsNames();

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value)
  }
  return (
    <div className={styles.toolBar}>
      <div className={styles.toolBarDetails}>
        {/* Надо будет кастомный выпадающий список сделать, а то это ужас какой-то */}
          <select value={selectedMonth} onChange={handleMonthChange} className={styles.monthSelect}>
            {monthsNames.map((month) => (
              <option value={month} key={month}>{month}</option>
            ))}
          </select>
          <span className={styles.today}>Сегодня</span>
      </div>
    </div>
  );
};
