import { JSX } from 'react';
import styles from './CreateTaskButton.module.css';
import CreateTaskBtn from './assets/icons/CreateTaskBtn.svg';

type CreateTaskButtonProps = {
  setIsActive: (active: boolean) => void;
};

export const CreateTaskButton = ({
  setIsActive,
}: CreateTaskButtonProps): JSX.Element => {
  return (
    <>
      <button className={styles.btn} onClick={() => setIsActive(true)}>
        <img src={CreateTaskBtn} alt="Create Task Button" />
      </button>
    </>
  );
};
