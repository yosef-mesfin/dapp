import {
	Stack,
	InputAdornment,
	OutlinedInput,
	Button,
	Typography,
	Checkbox,
	FormControlLabel,
	Slider,
	SliderProps,
	Box,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { IconStyle } from "../../IconStyle";

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
	width: "100%",
	height: "35px",
	background: "#28344e",
	borderRadius: "4px",
	// border: `0.2px ${theme.palette.divider}`,
	border: 'none',
	"& fieldset": {
		border: "none",
	}
}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "50%",
	height: "35px",
	background: theme.palette.secondary.main,
	color: theme.palette.common.white,
	"&:hover": {
		background: "#7882FF",
	},
}));

const CheckboxWithLabel = ({ label }: { label: string }) => {
	return (
		<FormControlLabel
			sx={{ margin: "0px" }}
			control={
				<Checkbox defaultChecked={true} color="secondary"
									sx={{
										height: '16px',
										width: '12px',
										'& svg':{
											height: '16px'
										}
				}}/>
			}
			label={label}
			labelPlacement="start"
		/>
	);
};

const sliderMarks =  Array.from(Array(10).keys()).map(index => ({value: index * 5 +5, label: index * 5 + 5 + 'x'}));
sliderMarks.unshift({value:2, label: '2x'});
const StyledSlider = (other: SliderProps) => {
	const SliderCustom = styled(Slider)(({ theme }) => ({
		color: theme.palette.secondary.main,
	}));
	return <SliderCustom track={false} size="small" min={2} max={50} marks={sliderMarks} {...other} />;
};

export const OrderInput = () => {
	const theme = useTheme();
	return (
		<Stack
			flexGrow={4}
			width="70%"
			direction="row"
			spacing="7px"
			paddingY="16px"
		>
			<Stack direction="column" spacing="8px" width="50%">
				<StyledOutlinedInput
					placeholder="Price"
					endAdornment={
						<InputAdornment position="end" sx={{ marginRight: "10px" }}>
							<Typography variant="body1" color="text.default">
								USD
							</Typography>
						</InputAdornment>
					}
				/>
				<StyledOutlinedInput
					placeholder="Amount"
					endAdornment={
						<InputAdornment position="end" sx={{ marginRight: "10px" }}>
							<Typography variant="body1" color="text.default">
								BTC
							</Typography>
						</InputAdornment>
					}
				/>
				<StyledOutlinedInput
					placeholder="Total"
					endAdornment={
						<InputAdornment position="end" sx={{ marginRight: "-9px", cursor: "pointer" }}>
							<Stack direction="row" alignItems="center" spacing="9px">
								<Typography variant="body1" color="text.default">
									USDC
								</Typography>
								<Box
									sx={{
										background: theme.palette.secondary.main,
										height: "8px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<IconStyle
										src={"/assets/token-select-arrow.svg"}
										sx={{
											background: theme.palette.common.white,
											height: "8px",
											width: "10px",

										}}
									/>
								</Box>
							</Stack>
						</InputAdornment>
					}
				/>
				<Stack direction="row" spacing="6px" height="100%"  alignItems="flex-end">
					<StyledButton>Buy BTC</StyledButton>
					<StyledButton
						sx={{
							background: theme.palette.common.white,
							color: theme.palette.secondary.main,
							"&:hover": {
								color: theme.palette.common.white,
							},
						}}
					>
						Sell BTC
					</StyledButton>
				</Stack>
			</Stack>
			<Stack
				direction="column"
				alignItems="flex-start"
				spacing="8px"
				width="50%"
			>
				<StyledOutlinedInput placeholder="Stop Loss" />
				<StyledOutlinedInput placeholder="Take Profit" />
				<Stack
					direction="row"
					alignItems="center"
					spacing="2.83px"
					paddingLeft="12px"
					paddingY='0'
				>
					<Stack paddingX="1.36px" alignItems="center">
						<img src="/assets/leverage.svg" alt="leverage" />
					</Stack>
					<CheckboxWithLabel label="SL/TP Presets?" />
				</Stack>
				<Stack direction="column" width="100%" paddingLeft="6px">
					<Typography
						variant="body1"
						color="text.default"
						marginLeft="6px"
						sx={{
							borderBottom: `1.5px solid ${theme.palette.secondary.main}`,
							width: "fit-content",
						}}
					>
						Leverage Slider
					</Typography>
					<StyledSlider />
				</Stack>
			</Stack>
		</Stack>
	);
};
