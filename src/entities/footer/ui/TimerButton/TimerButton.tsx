import { JSX } from "react";
import TimerBtn from './assets/icons/TimerBtn.svg';
import styles from './TimerButton.module.css';

export const TimerButton = (): JSX.Element => {
  return (
    <button className={styles.btn}>
      <img src={TimerBtn} alt="Timer Button" />
    </button>
  )
};