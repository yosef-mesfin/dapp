import { enUS, nlNL, nbNO, plPL, Localization } from "@mui/material/locale";

type language = {
	label: string;
	value: string;
	systemValue: Localization;
	icon: string;
};
export const allLangs: language[] = [
	{
		label: "English",
		value: "en",
		systemValue: enUS,
		icon: "/assets/icons/flags/ic_flag_fr.svg",
	},
	{
		label: "Dutch",
		value: "nl",
		systemValue: nlNL,
		icon: "/assets/icons/flags/ic_flag_vn.svg",
	},
	{
		label: "Norwegian",
		value: "no",
		systemValue: nbNO,
		icon: "/assets/icons/flags/ic_flag_cn.svg",
	},
	{
		label: "Polish",
		value: "pl",
		systemValue: plPL,
		icon: "/assets/icons/flags/ic_flag_sa.svg",
	},
];
export const defaultLang = allLangs[0]; // English
