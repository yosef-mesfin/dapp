import { Box, BoxProps, Link, SxProps, Typography } from "@mui/material";
import { IconStyle } from "../IconStyle";
import useLocales from "../../hooks/useLocale";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { LinkItem } from "./LinkItem";
import { matchPath } from "react-router";

type Props = {
	src: string;
	path: string;
	active?: boolean;
	sx?: SxProps;
};

const NavIconItem = ({ src, path, active, sx }: Props) => {
	const { t } = useLocales();
	const theme = useTheme();
	const { palette } = theme;
	const activeStyle = {
		color: theme.palette.common.white,
	};
	const externalLinkProps = {
		component: Link,
		href: path,
		target: "_blank",
		rel: "noopener",
	};
	const internalLinkProps = {
		component: NavLink,
		to: path,
	};
	const linkProps = isExternalLink(path)
		? externalLinkProps
		: internalLinkProps;

	return (
		<LinkItem {...linkProps} sx={{minWidth: 0, ...sx}} disableRipple>
			<IconStyle src={src} sx={{ color: theme.palette.common.white }} />
		</LinkItem>
	);
};
function isExternalLink(path: string) {
	return path.includes("http");
}

const isActive = (path: string, currentPath: string) => {
	return path ? !!matchPath({ path: path, end: false }, currentPath) : false;
};
export default NavIconItem;
