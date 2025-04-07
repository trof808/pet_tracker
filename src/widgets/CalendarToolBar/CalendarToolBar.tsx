import { JSX, useState } from 'react';
import styles from '../Calendar.module.css';
import { MonthDropDown } from '../../entities/calendar/ui/CalendarMonthDropDown/MonthDropDown';

// Тут будет лежать 3 фичи
// Выбор месяца, выбор сегодня, фильтрация по тегам
export const CalendarToolBar = (): JSX.Element => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  return (
    <div className={styles.toolBar}>
      <div className={styles.toolBarDetails}>
        {/* Обернуть в фичу */}
        <MonthDropDown
          selectedMonth={selectedMonth}
          onChange={(month) => setSelectedMonth(month)}
        />
        <span className={styles.today}>Сегодня</span>
      </div>
    </div>
  );
};
