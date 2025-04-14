import { JSX } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignIn } from './lib/hooks/useSignIn';
import { LoginForm } from '../../shared/ui/LoginForm/LoginForm';

export const Login = (): JSX.Element => {
  const { mutate, isPending } = useSignIn();

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
    <LoginForm
      formTitle="Логин"
      email={formik.values.email}
      password={formik.values.password}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      isPending={isPending}
    />
  );
};
