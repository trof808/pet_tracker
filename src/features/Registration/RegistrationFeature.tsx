import { JSX } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUp } from './libs/hooks/useSignUp';
import { RegistrationForm } from '../../shared/ui/RegistrationForm/RegistrationForm';
import { useTranslation } from 'react-i18next';

export const Registration = (): JSX.Element => {
  const { mutate, isPending } = useSignUp();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t('validation.email.invalid'))
        .required(t('validation.email.required')),
      password: Yup.string()
        .required(t('validation.password.required'))
        .min(6, t('validation.password.min')),
    }),
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
