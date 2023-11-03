import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { defaultLang } from "../config/lang";

import enLocales from "./en";
import noLocales from "./no";
import nlLocales from "./nl";
import plLocales from "./pl";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translations: enLocales },
			no: { translations: noLocales },
			nl: { translations: nlLocales },
			pl: { translations: plLocales },
		},
		lng: localStorage.getItem("i18nextLng") || defaultLang.value,
		fallbackLng: defaultLang.value,
		debug: false,
		ns: ["translations"],
		defaultNS: "translations",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
