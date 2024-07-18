import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN, ES } from "../src/langs";

let lang = "en";

// window.localStorage.setItem("lang", lang);
const localLang = window.localStorage.getItem("lang");

if (localLang) {
  // lang = JSON.parse(localLang)
  lang = localLang;
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: EN,
      es: ES,
    },
    lng: lang, // if you're using a language detector, do not define the lng option
    fallbackLng: [lang, "en"],

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
