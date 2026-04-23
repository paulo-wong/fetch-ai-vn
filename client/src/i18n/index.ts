import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import vi from './vi.json';

// Set Vietnamese as the default for first-time visitors only.
// If the user has already chosen a language, localStorage takes precedence.
const LANG_KEY = 'fetch-vn-lang';
if (!localStorage.getItem(LANG_KEY)) {
  localStorage.setItem(LANG_KEY, 'vi');
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    // Do NOT set `lng` here — it overrides the LanguageDetector and ignores localStorage.
    fallbackLng: 'vi',
    defaultNS: 'translation',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANG_KEY,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
