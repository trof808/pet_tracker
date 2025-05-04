import React, { JSX } from 'react';
import styles from './Modal.module.css';

type ModalProps  = {
  active: boolean;
  setActive: (status: boolean) => void;
  title: string,
  children: React.ReactNode
}

export const Modal = ({ active, setActive, title, children }: ModalProps): JSX.Element => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeBtn}
            onClick={() => setActive(false)}
          >
            ×
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};
