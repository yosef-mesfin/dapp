import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Stack } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import NavTextItem from "./NavTextItem";
import LogoWithName from "../LogoWithName";
import NavIconItem from "./NavIconItem";
import ConnectWallet from "../ConnectWallet";
import Network from "./Network";
import { LinkItem } from "./LinkItem";

const ContainerStyled = styled(AppBar)(({ theme }) => ({
	width: "100%",
	zIndex: theme.zIndex.appBar,
	position: "sticky",
	backgroundImage: "none",
	backgroundColor: theme.palette.background.default,
	boxShadow: "none",
	margin: 0,
	height: '50px',
}));
const NavBar = () => {
	const internalLinkProps = {
		component: NavLink,
		to: "/",
	};
	return (
		<ContainerStyled>
			<Toolbar  sx={{minHeight: "0px !important", height:"100%", paddingX:'0px !important'}} >
				<LinkItem {...internalLinkProps}>
					<LogoWithName sx={{ height: "24px" }} />
				</LinkItem>
				<Stack direction="row" paddingLeft={5} height="100%" >
					<NavTextItem title="dashboard" path="/dashboard" />
					<NavTextItem title="trade" path="/trade" />
					<NavTextItem title="swap" path="/swap" />
					<NavTextItem title="staking" path="/staking" />
					<NavTextItem title="referrals" path="/referrals" />
					<NavTextItem title="tradingAlgorithms" path="/trading-algorithms" />
					<NavTextItem title="docs" path="https://polyx-1.gitbook.io/polyx/" />
				</Stack>
				<Stack direction="row" paddingX="32px" marginLeft="auto" spacing="22px" >
					<NavIconItem src="/assets/nav-bar/bell.svg" path="#" sx={{minWidth: '0px'}}/>
					<NavIconItem src="/assets/nav-bar/language.svg" path="#" />
					<NavIconItem src="/assets/nav-bar/settings.svg" path="#" />
				</Stack>
				<ConnectWallet />
				<Network />
			</Toolbar>
		</ContainerStyled>
	);
};

export default NavBar;
