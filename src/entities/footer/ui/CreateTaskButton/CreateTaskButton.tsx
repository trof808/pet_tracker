import { JSX } from "react";
import styles from './CreateTaskButton.module.css';
import CreateTaskBtn from './assets/icons/CreateTaskBtn.svg';

export const CreateTaskButton = (): JSX.Element => {
  return (
    <button className={styles.btn}>
      <img src={CreateTaskBtn} alt="Create Task Button" />
    </button>
  )
};