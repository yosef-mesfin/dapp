import {
	Stack,
	InputAdornment,
	OutlinedInput,
	Button,
	Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
	width: "316px",
	height: "35px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "155px",
	height: "35px",
	background: theme.palette.secondary.main,
}));
// 1310 / 1820 = 0.72
export const OrderOptions = () => {
	const theme = useTheme();
	return (
		<Stack flexGrow={4}>
			<Stack direction="column">
				<StyledOutlinedInput
					placeholder="Price"
					endAdornment={
						<InputAdornment position="end">
							<Typography variant="body1" color="text.default">
								USD
							</Typography>
						</InputAdornment>
					}
				/>
				<StyledOutlinedInput
					placeholder="Amount"
					endAdornment={
						<InputAdornment position="end">
							<Typography variant="body1" color="text.default">
								BTC
							</Typography>
						</InputAdornment>
					}
				/>
				<StyledOutlinedInput
					placeholder="Total"
					endAdornment={
						<InputAdornment position="end">
							<Typography variant="body1" color="text.default">
								USDC
							</Typography>
						</InputAdornment>
					}
				/>
				<Stack direction="row" spacing="6px">
					<StyledButton>Buy BTC</StyledButton>
					<StyledButton sx={{ background: theme.palette.common.white }}>
						Sell BTC
					</StyledButton>
				</Stack>
			</Stack>
		</Stack>
	);
};
