import { Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconStyle } from "../IconStyle";

const NetworkActionButton = styled(Button)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	height: "25px",
	width: "55px",
	marginLeft: "19px",
	borderRadius: "4px",
	border: "1px solid #1E293B",
	padding: "3px 4px",
}));
const Network = () => {
	return (
		<NetworkActionButton>
			<img
				src="/assets/tokens/matic.svg"
				style={{ width: "100%", height: "100%" }}
				alt="logo"
			/>
			<IconStyle
				src="/assets/nav-bar/ellipsis.svg"
				sx={{ width: "18px", height: "11px", color: "common.white" }}
			/>
		</NetworkActionButton>
	);
};

export default Network;
