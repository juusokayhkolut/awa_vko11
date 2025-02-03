import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';

const resources: Resource = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      frontPageText: 'This is the front page',
    },
  },
  fi: {
    translation: {
      home: 'Etusivu',
      about: 'Tietoa Meistä',
      frontPageText: 'Tämä on etusivu',
    },
  },
};

i18n
  .use(HttpBackend)
  .use(BrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
