import { JSX, useState, useRef, useEffect } from "react";
import styles from "./Select.module.css";

type SelectProps = {
  selectedValue: string;
  options: string[];
  onChange: (value: string) => void;
};

export const Select = ({ selectedValue, options, onChange }: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const hiddenSelectRef = useRef<HTMLSelectElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (hiddenSelectRef.current) {
      hiddenSelectRef.current.value = selectedValue;
    }
  }, [selectedValue]);

  return (
    <div className={styles.selectContainer} data-state={isOpen ? "active" : ""}>
      <select
        ref={hiddenSelectRef}
        className={styles.hiddenSelect}
        value={selectedValue}
        onChange={(e) => handleSelect(e.target.value)}
        aria-label="Выбор опции"
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <button type="button" className={styles.selectBtn} onClick={handleToggle} aria-haspopup="listbox" aria-expanded={isOpen}>
        {selectedValue}
        <span className={styles.arrow} />
      </button>

      {isOpen && (
        <div className={styles.selectMenu} role="listbox">
          {options.map((value) => (
            <div
              key={value}
              className={styles.selectItem}
              role="option"
              aria-selected={value === selectedValue}
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
