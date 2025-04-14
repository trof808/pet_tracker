import { JSX } from 'react';
import styles from './LoginForm.module.css';
import { Link } from '@tanstack/react-router';

type LoginFormProps = {
  formTitle: string;
  email: string;
  password: string;
  errors: { [key: string]: string | undefined };
  touched: { [key: string]: boolean | undefined };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
};

export const LoginForm = ({
  formTitle,
  email,
  password,
  errors,
  touched,
  handleChange,
  handleSubmit,
  isPending,
}: LoginFormProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>{formTitle}</h1>
          <input
            id="email"
            type="email"
            className={`${styles.formInput} ${errors.email && touched.email ? styles.errorInput : ''}`}
            placeholder="Ваша почта"
            onChange={handleChange}
            value={email}
          />
          <input
            id="password"
            type="password"
            className={`${styles.formInput} ${errors.password && touched.password ? styles.errorInput : ''}`}
            placeholder="Ваш пароль"
            onChange={handleChange}
            value={password}
          />
          <button
            type="submit"
            className={styles.formBtn}
            disabled={Object.keys(errors).length > 0 || isPending}
          >
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
