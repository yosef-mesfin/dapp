import { useTheme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const OrderNotice = () => {
	const theme = useTheme();
	return (
		<Stack
			flexGrow={1}
			width="100%"
			maxHeight="38px"
			bgcolor="background.accent"
			padding="16px"
			direction="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Stack
				flexGrow={1}
				width="100%"
				maxHeight="100%"
				bgcolor="background.accent"
				padding="16px"
				direction="row"
				alignItems="center"
				justifyContent="flex-start"
			>
				<Stack
					width="21px"
					height="21px"
					alignItems="center"
					justifyContent="center"
				>
					<img src="/assets/notice.svg" alt="notice" />
				</Stack>

				<Stack
					width="content-fit"
					paddingLeft="16px"
					direction="column"
					justifyContent="center"
				>
					<Typography
						variant="body1"
						sx={{
							color: "common.white",
						}}
					>
						Reduce trading fees on this BTC pair
					</Typography>
				</Stack>
				<Button
					variant="text"
					sx={{
						color: "secondary.main",
						textTransform: "none",
					}}
				>
					More Details
					<ChevronRightIcon />
				</Button>
			</Stack>

			<Stack
				width="21px"
				height="21px"
				alignItems="center"
				justifyContent="center"
				sx={{
					cursor: "pointer",
					color: "secondary.main",
				}}
			>
				<img src="/assets/x.svg" alt="x" />
			</Stack>
		</Stack>
	);
};
