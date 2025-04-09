import { JSX, useState } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  selectedValue: string;
  options: string[];
  onChange: (value: string) => void;
};

export const Select = ({
  selectedValue,
  options,
  onChange,
}: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };
  return (
    // Сделать его на основе тегов select и option
    <div className={styles.selectContainer}>
      <button className={styles.selectBtn} onClick={handleToogle}>
        {selectedValue}
        <span className={styles.arrow} />
      </button>
      {isOpen && (
        <div className={styles.selectMenu}>
          {options.map((value) => (
            <div
              className={styles.selectItem}
              key={value}
              onClick={() => handleSelect(value)}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
