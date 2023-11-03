import { Box, BoxProps } from "@mui/material";

export const PolyX = ({ sx }: BoxProps) => (
	<Box sx={{ width: "100%", height: "100%", ...sx }}>
		<img
			src="/assets/polyx.svg"
			style={{ width: "100%", height: "100%" }}
			alt="polyx"
		/>
	</Box>
);

export const getPolyX = () => <PolyX />;
