import { matchPath, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { Box, Link, Button, Typography, Stack, SxProps } from "@mui/material";
import { LinkItem } from "./LinkItem";
import { styled, useTheme } from "@mui/material/styles";
import useLocales from "../../hooks/useLocale";

type Props = {
	title: string;
	path: string;
	sx?: SxProps;
};

const NavTextItem = ({ title, path, sx }: Props) => {
	const { t } = useLocales();
	const theme = useTheme();
	const {pathname} = useLocation();
	const active = isActive(path, pathname);
	const activeStyle = {
		color: theme.palette.grey["400"],
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
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
		<LinkItem {...linkProps} sx={{	"&:hover": {
				borderBottom: `1px solid ${theme.palette.secondary.main}`,
			}, padding: "0px 14px", ...(active && activeStyle), ...sx}} disableRipple>
			<Typography variant="subtitle2" sx={{fontWeight: 500}}>
				{t(title)}
			</Typography>
		</LinkItem>
	);
};
function isExternalLink(path: string) {
	return path.includes("http");
}

const isActive = (path: string, currentPath: string) => {
	return path ? !!matchPath({ path: path, end: false }, currentPath) : false;
};
export default NavTextItem;
