import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslations from '../../public/locales/en/common.json';
import trTranslations from '../../public/locales/tr/common.json';

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          common: enTranslations,
        },
        tr: {
          common: trTranslations,
        },
      },
      fallbackLng: 'en',
      defaultNS: 'common',
      ns: 'common',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        lookupLocalStorage: 'i18nextLng',
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;

