import { JSX } from 'react';
import styles from './AuthForm.module.css';

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
          <a href="тут роутинг на регистрацию сделаю через TanstackRouter">
            Регистрация
          </a>
        </div>
      </div>
    </div>
  );
};
