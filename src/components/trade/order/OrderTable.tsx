import React from "react";
import {
	Box,
	BoxProps,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Stack,
	Tabs,
	Tab,
	Typography,
} from "@mui/material";

import { useTheme, styled, SxProps } from "@mui/material/styles";
import { CSSProperties } from "@mui/material/styles/createTypography";

const RootStyle = styled(Stack)(({ theme }) => ({
	// borderColor: theme.palette.divider,
}));

type OrderTableProps = {
	sx?: SxProps;
	headFont?: CSSProperties;
};

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 0.5 }}>
						{children}
				</Box>
			)}
		</div>
	);
};

const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const StyledTab = styled(Tab)(({ theme }) => ({
	color: theme.palette.text.secondary,
	alignItems: "center",
	padding: "0 0px",
	minHeight: "30px",
	minWidth: "0px",
	marginRight: "36px",
	"&.Mui-selected": {
		color: theme.palette.common.white,
	},
	"&:hover":{
		color: theme.palette.common.white,
	}
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
	margin: "0",
	padding: "0",
	paddingLeft: "10px",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	background: theme.palette.background.default,
	padding: "0px",
	margin: "10px",
	justifyContent: "space-between",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: "0px",
	margin: "0px",
	border: "none",
	...theme.typography.body1,
}));

const tableTabs = [
	"Positions",
	"Orders",
	"Order History",
	"Closed P&L",
	"Filled",
	"Conditional",
];

const positionHeaders = [
	"Markets",
	"Direction",
	"Qty",
	"value",
	"Entry Price",
	"Liq. Price",
	"Unrealized P&L.(%)",
];

const positions = [
	"BTC/USD",
	"Long",
	"1.25",
	"$28,502",
	"$17,892.90",
	"$15,829.00",
	"+$15,428.82 (+25%)",
];

const OrderTable = ({ sx, headFont }: OrderTableProps) => {
	const { typography, palette } = useTheme();
	// const [positions, setPositions] = React.useState([]);

	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<RootStyle direction="column" width="100%">
			<Stack
				direction="row"
				justifyContent="space-between"
				// sx={{ borderBottom: "0.2px solid #475569" }}
				alignItems="center"
				paddingLeft="12px"
			>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
					indicatorColor="secondary"
					sx={{ minHeight: "0px", borderBottom: 1, borderColor: "divider"}}
				>
					{tableTabs.map((tab, index) => (
						<StyledTab
							key={tab}
							label={tab}
							{...a11yProps(index)}
							disableRipple
						/>
					))}
				</Tabs>
			</Stack>
			<StyledTabPanel value={value} index={0} >
				<TableContainer component={Paper} sx={{ padding: "0" }}>
					<Table aria-label="simple table">
						<TableHead >
							<StyledTableRow>
								{positionHeaders.map((header, index) => (
									<StyledTableCell
										key={index}
										align="left"
										sx={{ color: "text.secondary" }}
									>
										{header}
									</StyledTableCell>
								))}
							</StyledTableRow>
						</TableHead>
						<TableBody>
							<StyledTableRow
								sx={{
									"&:last-child td, &:last-child th": {
										border: "none",
									},
								}}
							>
								{positions.map((position, index) => (
									<StyledTableCell key={index} align="left">
										{index === 6 ? (
											<Stack
												direction="row"
												alignItems="center"
												justifyContent="flex-start"
												color="success.main"
											>
												{position}
											</Stack>
										) : (
											position
										)}
									</StyledTableCell>
								))}
							</StyledTableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</StyledTabPanel>
		</RootStyle>
	);
};

export default OrderTable;
