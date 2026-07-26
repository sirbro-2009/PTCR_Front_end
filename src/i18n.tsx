import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';
import translationUR from './locales/ur.json';
import translationID from './locales/id.json';
import translationMS from './locales/ms.json';
import translationTR from './locales/tr.json';
import translationFR from './locales/fr.json';
import translationFA from './locales/fa.json';
import translationBN from './locales/bn.json';
import translationHA from './locales/ha.json';
import translationSW from './locales/sw.json';
import translationDE from './locales/de.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
  ur: { translation: translationUR },
  id: { translation: translationID },
  ms: { translation: translationMS },
  tr: { translation: translationTR },
  fr: { translation: translationFR },
  fa: { translation: translationFA },
  bn: { translation: translationBN },
  ha: { translation: translationHA },
  sw: { translation: translationSW },
  de: { translation: translationDE }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;