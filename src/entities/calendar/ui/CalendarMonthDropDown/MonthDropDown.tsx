import { JSX, useState } from 'react';
import styles from './MonthDropDown.module.css';

type MonthDropDownProps = {
  selectedMonth: string;
  onChange: (month: string) => void;
};

const getMonthsNames = () => {
  return Array.from({ length: 12 }, (_, i) =>
    new Date(2025, i, 1).toLocaleString('default', { month: 'long' })
  );
};

const monthsNames = getMonthsNames();

export const MonthDropDown = ({
  selectedMonth,
  onChange,
}: MonthDropDownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (month: string) => {
    onChange(month);
    setIsOpen(false);
  };
  return (
    // Сделать базовый компонент <Select />
    // Сделать его на основе тегов select и option
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownBtn} onClick={handleToogle}>
        {selectedMonth}
        <span className={styles.arrow} />
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {monthsNames.map((month) => (
            <div
              className={styles.dropdownItem}
              key={month}
              onClick={() => handleSelect(month)}
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
