import { JSX } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUp } from './libs/hooks/useSignUp';
import { RegistrationForm } from '../../shared/ui/RegistrationForm/RegistrationForm';

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
    validateOnMount: true,
  });

  return (
    <RegistrationForm
      formTitle="Регистрация"
      email={formik.values.email}
      password={formik.values.password}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      isPending={isPending}
    />
  );
};
