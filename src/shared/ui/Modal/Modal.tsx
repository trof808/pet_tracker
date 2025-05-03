import { JSX } from 'react';
import styles from './Modal.module.css';

type ModalProps  = {
  active: boolean;
  setActive: (status: boolean) => void;
  title: string,
}

export const Modal = ({ active, setActive, title }: ModalProps): JSX.Element => {
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

        <div className={styles.body}>
          <p>Content goes here...</p>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.btnSecondary}
            onClick={() => setActive(false)}
          >
            Закрыть
          </button>
          <button
            className={styles.btnPrimary}
            onClick={() => {
              setActive(false);
            }}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
