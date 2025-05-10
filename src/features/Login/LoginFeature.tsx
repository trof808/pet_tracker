import { JSX } from 'react';
import { useFormik } from 'formik';
import { useSignIn } from './hooks/useSignIn';
import { LoginForm } from '../../entities/auth/ui/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';
import { LoginValidationSchema } from './utils/LoginValidationSchema';

export const Login = (): JSX.Element => {
  const { mutate, isPending } = useSignIn();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
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
