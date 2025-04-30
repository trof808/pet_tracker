import { JSX } from 'react';
import styles from './Chip.module.css';

type TagProps = {
  color: string;
  title: string;
}


export const Chip = ({ color, title }: TagProps): JSX.Element => {
  return (
    <button className={styles.chip} type="button">
      <span
        className={styles.tagIndicator}
        style={{ backgroundColor: color }}
      />
      <span className={styles.chip}>{title}</span>
    </button>
  );
};