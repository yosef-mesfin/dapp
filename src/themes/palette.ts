import { PaletteMode } from "@mui/material";
import { alpha, TypeText } from "@mui/material/styles";
declare module "@mui/material" {
	interface Color {
		0: string;
		500_8: string;
		500_12: string;
		500_16: string;
		500_24: string;
		500_32: string;
		500_48: string;
		500_56: string;
		500_80: string;
	}
}

const GREY = {
	0: "#FFFFFF",
	100: "#F9FAFB",
	200: "#F4F6F8",
	300: "#DFE3E8",
	400: "#C4CDD5",
	500: "#919EAB",
	500_8: alpha("#919EAB", 0.08),
	500_12: alpha("#919EAB", 0.12),
	500_16: alpha("#919EAB", 0.16),
	500_24: alpha("#919EAB", 0.24),
	500_32: alpha("#919EAB", 0.32),
	500_48: alpha("#919EAB", 0.48),
	500_56: alpha("#919EAB", 0.56),
	500_80: alpha("#919EAB", 0.8),
	600: "#637381",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
};
declare module "@mui/material/styles/createPalette" {
	interface PaletteColor {
		lighter: string;
		darker: string;
	}
}

declare module "@mui/material/styles" {
	interface TypeText {
		accent: string;
		up: string;
		down: string;
	}
	interface TypeBackground {
		accent: string;
		divider: string;
	}
}
const PRIMARY = {
	main: "#161E2C",
};

const SECONDARY = {
	main: "#7474ef",
};

const WARNING = {
	main: "#a379f8",
};
const INFO = {
	main: "#a379f8",
};
const SUCCESS = {
	main: "#0ECC83",
};

const ERROR = {
	main: "#a379f8",
};
const COMMON = {
	common: { black: "#000", white: "#fff" },
	primary: { ...PRIMARY, contrastText: "#fff" },
	secondary: { ...SECONDARY, contrastText: "#fff" },
	info: { ...INFO, contrastText: "#fff" },
	success: { ...SUCCESS, contrastText: "#fff" },
	error: { ...ERROR, contrastText: "#fff" },
	grey: GREY,
	divider: "#1E293B",
	action: {
		hover: "#fff",
		selected: "#7174ef",
		disabled: "#475569",
		disabledBackground: "#a379f8",
		focus: "#a379f8",
		disableOpacity: "#a379f8",
	},
};
const palette = {
	dark: {
		...COMMON,
		mode: "dark" as PaletteMode,
		text: {
			primary: "#FFFFFF",
			secondary: "#475569",
			accent: "#7474EF",
			up: "#7474EF",
			down: "#FFFFFF",
		},
		background: {
			paper: "#1E273B",
			default: "#161E2C",
			accent: "#3E3E8A",
			divider: "#475569",
		},
	},
	light: {
		...COMMON,
		mode: "dark" as PaletteMode,
		text: {
			primary: "#FFFFFF",
			secondary: "#475569",
			accent: "#7474EF",
			up: "#7474EF",
			down: "#FFFFFF",
		},
		background: {
			paper: "#1E273B",
			default: "#161E2C",
			accent: "#3E3E8A",
			divider: "#7173ef33",
		},
	},
};

export default palette;
