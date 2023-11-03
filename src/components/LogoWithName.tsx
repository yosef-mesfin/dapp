import { Stack, SxProps } from "@mui/material";
import { Logo } from "./Logo";
import { PolyX } from "./PolyX";

type IProps = {
	sx?: SxProps;
};
const LogoWithName = ({ sx }: IProps) => {
	return (
		<Stack direction="row" alignItems="center" spacing="2px" sx={sx}>
			<Logo sx={{ width: "fit-content" }} />
			<PolyX sx={{ height: "18px" }} />
		</Stack>
	);
};

export default LogoWithName;
