const FONT_DEFAULT = "Roboto, sans-serif";

const pxToRem = (value: number) => `${value / 16}rem`;

const typography = {
	fontFamily: FONT_DEFAULT,
	fontSize: 16,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
	h1: {
		fontWeight: 400,
		fontSize: pxToRem(50),
		lineHeight: 80 / 64,
	},
	h2: {
		fontWeight: 400,
		fontSize: pxToRem(32),
		lineHeight: 64 / 48,
	},
	h3: {
		fontWeight: 400,
		fontSize: pxToRem(24),
		lineHeight: 1.5,
	},
	h4: {
		fontWeight: 400,
		fontSize: pxToRem(20),
		lineHeight: 1.5,
	},
	h5: {
		fontWeight: 400,
		fontSize: "18px", //pxToRem(18),
		lineHeight: 1.5,
	},
	h6: {
		fontWeight: 400,
		fontSize: "17px", //pxToRem(17),
		lineHeight: 28 / 18,
	},
	subtitle1: {
		fontWeight: 400,
		lineHeight: 22 / 16,
		fontSize: "16px", //pxToRem(16),
		// '@media(max-width: 900px)': {
		//     fontSize: pxToRem(16),
		//     lineHeight: 22 / 10,
		// },
	},
	subtitle2: {
		fontWeight: 600,
		lightHeight: 22 / 14,
		fontSize: "14px", // pxToRem(14),
		// '@media(max-width: 900px)': {
		//     fontSize: pxToRem(8),
		//     lineHeight: 22 / 8,
		// },
	},
	body1: {
		lineHeight: 1.5,
		fontSize: "12px", //pxToRem(16),
	},
	body2: {
		fontWeight: 600,
		lineHeight: 22 / 10,
		fontSize: "10px", //pxToRem(10),
	},
	caption: {
		fontWeight: 600,
		lineHeight: 1.5,
		fontSize: "9px", //pxToRem(9),
		// '@media(max-width: 900px)': {
		//     fontSize: pxToRem(9),
		//     lineHeight: 22 / 9,
		// },
	},
	overline: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		textTransform: "uppercase",
	},
	button: {
		fontWeight: 400,
		lineHeight: "14.52px",
		fontSize: pxToRem(12),
		textTransform: "none",
	},
} as const;

export default typography;
