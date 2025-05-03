import { JSX } from 'react';
import styles from './CreateTaskButton.module.css';
import CreateTaskBtn from './assets/icons/CreateTaskBtn.svg';
import { Modal } from '../../../../shared/ui/Modal/Modal';

type CreateTaskButtonProps = {
  isActive: boolean,
  setIsActive: (active: boolean) => void;
  title: string,
}

export const CreateTaskButton = ({ isActive, setIsActive, title }: CreateTaskButtonProps): JSX.Element => {
  return (
    <>
      <button className={styles.btn} onClick={() => setIsActive(true)}>
        <img src={CreateTaskBtn} alt="Create Task Button" />
      </button>
      <Modal active={isActive} setActive={setIsActive} title={title} />
    </>
  );
};
