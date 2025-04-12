import { JSX } from 'react';
import styles from '../Login/AuthForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUp } from './libs/hooks/useSignUp';


export const Registration = (): JSX.Element => {
  const { mutate, isPending } = useSignUp(); 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Неверный адрес электронной почты')
        .required('Обязательное поле'),
      password: Yup.string().required('Обязательное поле'),
    }),
    onSubmit: async (values) => {
      await mutate(values);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
          <h1 className={styles.formTitle}>Регистрация</h1>
          <input
            id="email"
            type="email"
            className={`${styles.formInput} ${formik.errors.email ? styles.errorInput : ''}`}
            placeholder="Ваша почта"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <input
            id="password"
            type="password"
            className={`${styles.formInput} ${formik.errors.password ? styles.errorInput : ''}`}
            placeholder="Ваш пароль"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button type="submit" className={styles.formBtn} disabled={Object.keys(formik.errors).length > 0 || isPending}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};
