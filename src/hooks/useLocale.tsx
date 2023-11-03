import { useTranslation } from "react-i18next";
import { allLangs, defaultLang } from "../config/lang";
import { TFuncReturn, TFunctionDetailedResult } from "i18next";
import { DefaultNamespace } from "react-i18next/TransWithoutContext";

export default function useLocales() {
	const { i18n, t } = useTranslation();
	const langStorage = localStorage.getItem("i18nextLng");
	const currentLang =
		allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;
	const handleChangeLanguage = (_newLang: string) => {
		i18n.changeLanguage(_newLang);
	};
	return {
		currentLang,
		onChangeLang: handleChangeLanguage,
		t: (text: string, options?: any) => t(text, options).toString(),
		allLangs,
	};
}
