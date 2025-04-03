import { JSX } from 'react';
import styles from './AuthForm.module.css';
import { Link } from '@tanstack/react-router';

export const Login = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form className={styles.formContainer}>
          <h1 className={styles.formTitle}>Войти</h1>
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
            Войти
          </button>
        </form>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterDetails}>
          <span>Нет аккаунта?</span>
          <Link to="/registration">Регистрация</Link>
        </div>
      </div>
    </div>
  );
};
