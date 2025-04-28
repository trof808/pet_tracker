import { JSX } from 'react';
import { useFormik } from 'formik';
import { useSignUp } from './lib/hooks/useSignUp';
import { RegistrationForm } from '../../entities/auth/RegistrationForm/RegistrationForm';
import { useTranslation } from 'react-i18next';
import { RegistrationValidationSchema } from './lib/RegistrationValidationSchema';

export const Registration = (): JSX.Element => {
  const { mutate, isPending } = useSignUp();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: RegistrationValidationSchema,
    onSubmit: async (values) => {
      await mutate(values);
    },
    validateOnMount: true,
  });

  return (
    <RegistrationForm
      formTitle={t('registartion.header')}
      email={formik.values.email}
      password={formik.values.password}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      isPending={isPending}
      placeholderMail={t('form.placeholderMail')}
      placeholderPassword={t('form.placeholderPassword')}
      submitButton={t('form.registration.submitButton')}
    />
  );
};
