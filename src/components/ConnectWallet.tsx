import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconStyle } from "./IconStyle";

const StyledCTA = styled(Button)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	background: "#7474EF",
	justifyContent: "space-between",
	padding: "1px 25px",
	height: "31px",
	width: "100%",
	maxWidth: "180px",
	minWidth: "170px",
	"&:hover": {
		background: "#7882FF",
	},
}));

const ConnectWallet = () => {
	return (
		<StyledCTA>
			<IconStyle
				src="/assets/nav-bar/wallet.svg"
				sx={{ width: "18px", height: "18px", color: "common.white" }}
			/>
			<Typography variant="subtitle2" sx={{ color: "common.white" }}>
				Connect Wallet
			</Typography>
		</StyledCTA>
	);
};

export default ConnectWallet;
