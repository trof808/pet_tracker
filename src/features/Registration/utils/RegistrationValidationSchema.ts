import { t } from 'i18next';
import * as Yup from 'yup';

export const RegistrationValidationSchema = Yup.object({
  email: Yup.string()
    .email(t('validation.email.invalid'))
    .required(t('validation.email.required')),
  password: Yup.string().required(t('validation.password.required')),
});
