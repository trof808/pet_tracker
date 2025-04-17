import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales/index.ts';

i18n.use(initReactI18next).init({
  resources,
  debug: false,
  fallbackLng: 'ru',
});

export default i18n;
