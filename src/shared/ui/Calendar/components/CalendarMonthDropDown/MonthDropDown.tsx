import { JSX, useState } from 'react';
import styles from './MonthDropDown.module.css';

type MonthDropDownProps = {
  months: string[];
  selectedMonth: string;
  onChange: (month: string) => void;
};

export const MonthDropDown = ({
  months,
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
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownBtn} onClick={handleToogle}>
        {selectedMonth}
        <span className={styles.arrow} />
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {months.map((month) => (
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
