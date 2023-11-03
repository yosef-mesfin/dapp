import React from "react";
import { Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

type RowStatProps = {
	title: string;
	value: string;
};
const RowStat = ({ title, value }: RowStatProps) => {
	return (
		<Stack direction="row" justifyContent="space-between">
			<Typography
				variant="body2"
				sx={{
					color: "text.secondary",
				}}
			>
				{title}
			</Typography>
			<Typography variant="body2">{value}</Typography>
		</Stack>
	);
};

const statData = [
	{
		title: "Trade Collateral",
		value: "USDC",
	},
	{
		title: "Leverage",
		value: "2.00x",
	},
	{
		title: "Entry Price",
		value: "$23,779.10",
	},
	{
		title: "Liquidation Price",
		value: "$20,380.00",
	},
	{
		title: "Fees",
		value: "$132.06",
	},
	{
		title: "Borrow fee",
		value: "0.0024% /1h",
	},
	{
		title: "Availability Liquidity",
		value: "$4,592,040.48",
	},
];

export const OrderStat = () => {
	const theme = useTheme();
	return (
		<Stack
			flexGrow={1}
			paddingLeft="16px"
			width="25%"
			paddingY="16px"
			sx={{
				borderLeft: `1px solid ${theme.palette.divider}`,
			}}
		>
			{statData.map((stat, index) => {
				return <RowStat key={index} title={stat.title} value={stat.value} />;
			})}
		</Stack>
	);
};
