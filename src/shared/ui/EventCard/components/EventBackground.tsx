import styles from '../EventCard.module.css';
import checkIcon from '../assets/check.svg';
import binIcon from '../assets/bin.svg';
import { JSX } from 'react';

export const EventBackground = (): JSX.Element => {
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
};
