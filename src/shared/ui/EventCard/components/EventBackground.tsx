import styles from '../EventCard.module.css';
import checkIcon from '../assets/check.svg';
import binIcon from '../assets/bin.svg';
import { JSX, memo } from 'react';

// Этот компонент можно обернуть в memo, чтобы он не рендерился из-за родителя
// почитать про memo
export const EventBackground = memo((): JSX.Element => {
  return (
    <div className={styles.taskBackground}>
      <img
        className={`${styles.icon} ${styles.checkIcon}`}
        src={checkIcon}
        alt="Check"
      />

      <img
        className={`${styles.icon} ${styles.binIcon}`}
        src={binIcon}
        alt="Bin"
      />
    </div>
  );
});
