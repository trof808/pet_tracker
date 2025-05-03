import { JSX } from "react";
import styles from './StatsButton.module.css';
import StatsBtn from './assets/icons/StatsBtn.svg'

export const StatsButton = (): JSX.Element => {
  return (
    <button className={styles.btn}>
      <img src={StatsBtn} alt="Timer Button" />
    </button>
  )
};