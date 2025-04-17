import { JSX } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignIn } from './lib/hooks/useSignIn';
import { LoginForm } from '../../shared/ui/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

export const Login = (): JSX.Element => {
  const { mutate, isPending } = useSignIn();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // Можно вынести валидацию в функцию
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t('validation.email.invalid'))
        .required(t('validation.email.required')),
      password: Yup.string().required(t('validation.password.required')),
    }),
    onSubmit: async (values) => {
      await mutate(values);
    },
  });

  return (
    <LoginForm
      formTitle={t('login.header')}
      email={formik.values.email}
      password={formik.values.password}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      isPending={isPending}
      placeholderMail={t('form.placeholderMail')}
      placeholderPassword={t('form.placeholderPassword')}
      noAcc={t('form.noAcc')}
      regLink={t('form.link')}
      submitButton={t('form.login.submitButton')}
    />
  );
};
