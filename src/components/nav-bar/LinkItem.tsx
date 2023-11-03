import { Button } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

export const LinkItem = styled(Button)(({ theme }) => ({
	...theme.typography.subtitle2,
	color: theme.palette.text.secondary,
	borderRadius: "0px",
	padding: "0px",
	"&:hover h6": {
		color: theme.palette.grey[500],
	},
}));
