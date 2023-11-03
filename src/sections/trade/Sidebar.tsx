import * as React from "react";
import {
	OutlinedInput,
	Stack,
	InputAdornment,
	Typography,
	Box,
	Tab,
	Table,
	Paper,
	TableRow,
	Tabs,
	TableCell,
	TableHead,
	TableBody,
	TableContainer,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { IconStyle } from "../../components/IconStyle";

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
	width: "100%",
	height: "27px",
	background: theme.palette.background.paper,
	borderRadius: "4px",
	// border: `0.2px ${theme.palette.divider}`,
	padding: "6px 7px",
	border: 'none',
	"& fieldset": {
		border: "none",
	},
	"& input": {
		height: "30px",
		padding: "0px",
	},
}));
type RowProps = {
	pair: string;
	price: string;
	change: string;
	isFav: boolean;
	isPriceUp: boolean;
	isChangeUp: boolean;
};

const trades =  Array.from(Array(16).keys()).map(_ =>(
	{
		price: "23,780.5",
		amount: "0.002",
		time: "20:58:28",
	}));


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
			{value === index && <Box>{children}</Box>}
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
	height: "10px",
	color: theme.palette.text.secondary,
	alignItems: "flex-start",
	padding: "0",
	minWidth: '0',
	marginRight:'33px',
	minHeight: "30px",
	"&.Mui-selected": {
		color: theme.palette.common.white,
	},
	"&:hover":{
		color: theme.palette.common.white,
	}
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
	// backgroundColor: theme.palette.mode === "dark" ? "#2e2e2e" : "#fff",
	margin: "0",
	padding: "0",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	background: theme.palette.background.default,
	padding: "0px",
	margin: "0px",
	justifyContent: "space-between",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: "0px",
	margin: "0px",
	border: "none",
	...theme.typography.body2,
	lineHeight: "12px",
}));

const Row = ({
	pair,
	price,
	change,
	isFav,
	isPriceUp,
	isChangeUp,
}: RowProps) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			width="100%"
		>
			<Stack
				direction="row"
				alignItems="center"
				spacing="8px"
				minWidth="90px"
				width="30%"
			>
				<IconStyle
					src="/assets/star.svg"
					sx={{
						height: "10px",
						width: "10px",
						color: isFav ? "secondary.main" : "action.disabled",
					}}
				/>
				<Stack direction="row">
					<Typography variant="body1" color="common.white">
						{pair}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						/USD
					</Typography>
				</Stack>
			</Stack>
			<Typography
				width="40%"
				variant="body1"
				color={isPriceUp ? "text.up" : "text.down"}
			>
				{price}
			</Typography>
			<Typography
				width="20%"
				variant="body1"
				color={isChangeUp ? "text.up" : "text.down"}
			>
				{change}%
			</Typography>
		</Stack>
	);
};

const tokenStatList = [
	{
		pair: "BTC",
		isFav: true,
		price: "23,780.5",
		change: "-0.67",
		isPriceUp: false,
		isChangeUp: false,
	},
	{
		pair: "ETH",
		isFav: false,
		price: "1,653.40",
		change: "0.78",
		isPriceUp: true,
		isChangeUp: true,
	},
	{
		pair: "MATIC",
		isFav: false,
		price: "1.3747",
		change: "-1.62",
		isPriceUp: false,
		isChangeUp: false,
	},
	{
		pair: "DOGE",
		isFav: false,
		price: "0.08496",
		change: "-0.67",
		isPriceUp: false,
		isChangeUp: false,
	},
	{
		pair: "SOL",
		isFav: false,
		price: "24.22",
		change: "0.21",
		isPriceUp: true,
		isChangeUp: true,
	},
	{
		pair: "XRP",
		isFav: false,
		price: "0.3908",
		change: "-1.01",
		isPriceUp: false,
		isChangeUp: false,
	},
	{
		pair: "MSFT",
		isFav: true,
		price: "251.51",
		change: "-0.46",
		isPriceUp: false,
		isChangeUp: false,
	},
	{
		pair: "TSLA",
		isFav: false,
		price: "200.86",
		change: "1.77%",
		isPriceUp: true,
		isChangeUp: true,
	},
	{
		pair: "XAU",
		isFav: true,
		price: "1,825.19",
		change: "-0.04%",
		isPriceUp: false,
		isChangeUp: false,
	},
	{
		pair: "EUR",
		isFav: false,
		price: "1.06078",
		change: "0.02%",
		isPriceUp: true,
		isChangeUp: true,
	},
	{
		pair: "GBP",
		isFav: false,
		price: "1.20357",
		change: "-0.10",
		isPriceUp: false,
		isChangeUp: false,
	},
	{
		pair: "AUD",
		isFav: true,
		price: "0.67344",
		change: "0.02",
		isPriceUp: true,
		isChangeUp: true,
	},
	{
		pair: "SHIB",
		isFav: false,
		price: "0.00001",
		change: "-0.10",
		isPriceUp: false,
		isChangeUp: false,
	},
];
const Sidebar = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<Stack
			direction="column"
			bgcolor="background.default"
			alignItems="center"
			justifyContent="flex-start"
			paddingTop="8px"
			borderLeft={`1px solid ${theme.palette.divider}`}
			height="100%"
		>
			<Stack
				direction="column"
				paddingX="21px"
				width="100%"
				borderBottom={`1px solid ${theme.palette.divider}`}
			>
				<StyledOutlinedInput
					placeholder="Search"
					startAdornment={
						<InputAdornment position="start">
							<IconStyle
								src="/assets/search.svg"
								sx={{ height: "15px", width: "20px", color: "text.secondary" }}
							/>
						</InputAdornment>
					}
				/>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					spacing="22px"
					paddingY="10px"
					width="100%"
				>
					<Stack
						direction="row"
						alignItems="center"
						spacing="8px"
						sx={{ cursor: "pointer" }}
					>
						<IconStyle
							src="/assets/star.svg"
							sx={{ height: "10px", width: "10px", color: "secondary.main" }}
						/>
						<Typography variant="body1" color="common.white">
							Crypto
						</Typography>
					</Stack>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{ cursor: "pointer", "&:hover": { color: "common.white" } }}
					>
						Forex
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{ cursor: "pointer", "&:hover": { color: "common.white" } }}
					>
						Stocks
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{ cursor: "pointer", "&:hover": { color: "common.white" } }}
					>
						Commodities
					</Typography>
				</Stack>
			</Stack>
			<Stack
				direction="column"
				alignItems="center"
				width="100%"
				paddingX="21px"
				borderBottom={`1px solid ${theme.palette.divider}`}
				paddingY="10px"
				spacing="11px"
			>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					width="100%"
				>
					<Stack direction="row" alignItems="center" spacing="3px">
						<Typography variant="body1" color="text.secondary">
							Pair
						</Typography>
						<IconStyle
							src="/assets/arrow-up.svg"
							sx={{ height: "10px", width: "10px", color: "secondary.main" }}
						/>
					</Stack>

					<Stack direction="row" alignItems="center" spacing="3px">
						<Typography variant="body1" color="text.secondary">
							Price
						</Typography>
						<IconStyle
							src="/assets/arrow-up.svg"
							sx={{ height: "10px", width: "10px", color: "secondary.main" }}
						/>
					</Stack>

					<Stack direction="row" alignItems="center" spacing="3px">
						<Typography variant="body1" color="text.secondary">
							Change
						</Typography>
						<IconStyle
							src="/assets/arrow-up.svg"
							sx={{ height: "10px", width: "10px", color: "secondary.main" }}
						/>
					</Stack>
				</Stack>
				<Stack
					direction="column"
					alignItems="center"
					justifyContent="flex-start"
					width="100%"
				>
					{tokenStatList.map(
						({ pair, price, change, isFav, isPriceUp, isChangeUp }, index) => (
							<Row
								key={index}
								pair={pair}
								price={price}
								change={change}
								isFav={isFav}
								isPriceUp={isPriceUp}
								isChangeUp={isChangeUp}
							/>
						)
					)}
				</Stack>
			</Stack>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="stretch"
				width="100%"
				spacing="8px"
				// paddingX="21px"
			>
				<Stack width="100%" paddingX="21px" sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						indicatorColor="secondary"
						sx={{ minHeight: "0px", borderBottom: 1, borderColor: "divider" }}
					>
						<StyledTab disableRipple label="Recent Trades" {...a11yProps(0)} />
						<StyledTab disableRipple label="Order book" {...a11yProps(1)} />
					</Tabs>
				</Stack>
				<StyledTabPanel value={value} index={0} sx={{ width: "100%", paddingX:"21px"}}>
					<TableContainer component={Paper} sx={{boxShadow: 'none'}}>
						<Table aria-label="simple table"  sx={{ maxWidth: "100%" }}>
							<TableHead>
								<StyledTableRow>
									<StyledTableCell sx={{ color: theme.palette.text.secondary, ...theme.typography.body2 }}>
										Price(USD)
									</StyledTableCell>
									<StyledTableCell sx={{ color: theme.palette.text.secondary, ...theme.typography.body2 }}>
										Amount
									</StyledTableCell>
									<StyledTableCell
										sx={{ color: theme.palette.text.secondary, ...theme.typography.body2 }}
										align="right"
									>
										Time
									</StyledTableCell>
								</StyledTableRow>
							</TableHead>
							<TableBody>
								{trades.map((row, index) => (
									<TableRow
										key={index}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<StyledTableCell component="th" scope="row">
											{row.price}
										</StyledTableCell>
										<StyledTableCell
											align="left"
											sx={{ color: theme.palette.text.disabled }}
										>
											{row.amount}
										</StyledTableCell>
										<StyledTableCell
											align="right"
											sx={{ color: theme.palette.text.disabled }}
										>
											{row.time}
										</StyledTableCell>
									</TableRow>
								))}
								<TableRow
									sx={{
										...theme.typography.h4,
										"&:last-child td, &:last-child th": { border: 0 },
									}}
								>
									<StyledTableCell
										component="th"
										scope="row"
										sx={{ ...theme.typography.h5 }}
									>
										23,780.5
									</StyledTableCell>
									<StyledTableCell
										align="left"
										sx={{ ...theme.typography.h5 }}
									></StyledTableCell>
									<StyledTableCell
										align="right"
										sx={{ ...theme.typography.h5 }}
									></StyledTableCell>
								</TableRow>
								<TableRow
									sx={{
										...theme.typography.h4,
										"&:last-child td, &:last-child th": { border: 0 },
									}}
								>
									<StyledTableCell
										component="th"
										scope="row"
										sx={{
											...theme.typography.h5,
											color: theme.palette.text.up,
										}}
									>
										23,780.5
									</StyledTableCell>
									<StyledTableCell
										align="left"
										sx={{
											...theme.typography.h5,
											color: theme.palette.text.up,
										}}
									></StyledTableCell>
									<StyledTableCell
										align="right"
										sx={{
											...theme.typography.h5,
											color: theme.palette.text.up,
										}}
									></StyledTableCell>
								</TableRow>
								{trades.map((row, index) => (
									<TableRow
										key={index}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<StyledTableCell
											component="th"
											scope="row"
											sx={{ color: theme.palette.text.up }}
										>
											{row.price}
										</StyledTableCell>
										<StyledTableCell
											align="left"
											sx={{ color: theme.palette.text.disabled }}
										>
											{row.amount}
										</StyledTableCell>
										<StyledTableCell
											align="right"
											sx={{ color: theme.palette.text.disabled }}
										>
											{row.time}
										</StyledTableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</StyledTabPanel>
				<StyledTabPanel value={value} index={1}/>
			</Stack>
		</Stack>
	);
};

export default Sidebar;
