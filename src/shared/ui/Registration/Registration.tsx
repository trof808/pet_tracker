import { JSX } from 'react';
import styles from '../Login/AuthForm.module.css';

export const Registration = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form className={styles.formContainer}>
          <h1 className={styles.formTitle}>Регистрация</h1>
          <input
            id="email"
            type="email"
            className={styles.formInput}
            placeholder="Ваша почта"
          />
          <input
            id="password"
            type="password"
            className={styles.formInput}
            placeholder="Ваш пароль"
          />
          <button type="submit" className={styles.formBtn}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};
