import { useMemo, ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import {
	createTheme,
	ThemeOptions,
	ThemeProvider,
	StyledEngineProvider,
} from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";

type Props = {
	children: ReactNode;
};
export default function CustomThemeProvider({ children }: Props) {
	const isLight = false; //add support for light mode

	const themeOptions = useMemo(
		() => ({
			palette: isLight ? palette.light : palette.dark,
			typography,
		}),
		[isLight]
	);
	const theme = createTheme(themeOptions);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
}
