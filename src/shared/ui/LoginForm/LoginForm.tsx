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
  placeholderMail: string;
  placeholderPassword: string;
  noAcc: string;
  regLink: string;
  submitButton: string;
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
  placeholderMail,
  placeholderPassword,
  noAcc,
  regLink,
  submitButton,
  
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
            placeholder={placeholderMail}
            onChange={handleChange}
            value={email}
          />
          <input
            id="password"
            type="password"
            className={`${styles.formInput} ${errors.password && touched.password ? styles.errorInput : ''}`}
            placeholder={placeholderPassword}
            onChange={handleChange}
            value={password}
          />
          <button
            type="submit"
            className={styles.formBtn}
            disabled={Object.keys(errors).length > 0 || isPending}
          >
            {submitButton}
          </button>
        </form>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterDetails}>
          <span>{noAcc}</span>
          <Link to="/registration">{regLink}</Link>
        </div>
      </div>
    </div>
  );
};
