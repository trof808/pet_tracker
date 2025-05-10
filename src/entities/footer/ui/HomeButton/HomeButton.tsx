import { JSX } from "react";
import styles from './HomeButton.module.css'
import HomeBtn from './assets/icons/HomeBtn.svg'

export const HomeButton = (): JSX.Element => {
  return (
    <button className={styles.btn}>
      <img src={HomeBtn} alt="Home Button" />
    </button>
  )
};