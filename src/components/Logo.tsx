import { Box, BoxProps } from "@mui/material";

export const Logo = ({ sx }: BoxProps) => (
	<Box sx={{ width: "100%", height: "100%", ...sx }}>
		<img
			src="/assets/logo.svg"
			style={{ width: "100%", height: "100%" }}
			alt="logo"
		/>
	</Box>
);

export const getLogo = () => <Logo />;
