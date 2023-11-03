import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {
	src: string;
}

export const IconStyle = ({ src, sx }: Props) => (
	<Box
		component="span"
		sx={{
			width: 24,
			height: 24,
			display: "inline-block",
			color: "currentcolor",
			bgcolor: "currentcolor",
			mask: `url(${src}) no-repeat center / contain`,
			WebkitMask: `url(${src}) no-repeat center / contain`,
			...sx,
		}}
	/>
);

export const getNavIcon = (name: string) => (
	<IconStyle
		src={`/assets/icons/navbar/${name}.svg`}
		sx={{ width: 1, height: 1 }}
	/>
);

export const getCoinIcon = (name: string) => (
	<IconStyle src={`/assets/coins/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

export const getIcon = (src: string) => (
	<IconStyle src={src} sx={{ width: 1, height: 1 }} />
);
