import { JSX, useState } from 'react';
import styles from './CreateTaskButton.module.css';
import CreateTaskBtn from './assets/icons/CreateTaskBtn.svg';
import { Modal } from '../../../../shared/ui/Modal/Modal';

export const CreateTaskButton = (): JSX.Element => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <>
      <button className={styles.btn} onClick={() => setModalActive(true)}>
        <img src={CreateTaskBtn} alt="Create Task Button" />
      </button>
      <Modal active={modalActive} setActive={setModalActive}/>
    </>
  );
};
