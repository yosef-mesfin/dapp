import {useState} from "react";
import {Button, Stack, Typography} from "@mui/material";
import { OrderInput } from "../../components/trade/order/OrderInput";
import { OrderStat } from "../../components/trade/order/OrderStat";
import OrderTable from "../../components/trade/order/OrderTable";
import {styled, useTheme} from "@mui/material/styles";

const FlatButton = styled(Button)(({theme})=>({
	padding: '0',
	margin: '0',
	minWidth: '0',
	minHeight:'0',

}))
const tableTabs = ["Limit", "Market", "Stop"];
const Order = () => {
	const [orderType, setOrderType] = useState<string>('limit');
	const theme = useTheme();

	const onOrderTypeChange = (orderType: string)=>{
		setOrderType(orderType);
	}
	return (
		<Stack direction="column" width="100%">
			<Stack
				direction="row"
				height="31px"
				bgcolor="background.default"
				alignItems="center"
				justifyContent="flex-start"
				// paddingX="1.5em"
			>
				{tableTabs.map((tab) => (
					<FlatButton
						key={tab}
						onClick={()=>onOrderTypeChange(tab.toLowerCase())}
					>
						<Typography
							variant="body1"
							height="100%"
							padding="10px 2em 6px"
							borderTop={"4px solid "+(orderType == tab.toLowerCase()? theme.palette.secondary.main: "transparent")}
							bgcolor={orderType == tab.toLowerCase()? theme.palette.background.paper: "transparent"}
							color={orderType == tab.toLowerCase()? theme.palette.text.primary: theme.palette.text.secondary}

							sx={{
								cursor: "pointer",
								"&:hover": {
									color: theme.palette.text.primary,
									background: theme.palette.background.paper,
									borderTop: `4px solid ${theme.palette.secondary.main}`,
								},
							}}
						>
							{tab}
						</Typography>
					</FlatButton>
				))}
			</Stack>
			<Stack width="100%" direction="row">
				<Stack
					flexGrow={1}
					direction="row"
					paddingX="25px"
					// paddingY="16px"
					bgcolor="background.paper"
					border="none"
					spacing="8px"
					maxWidth="60%"
				>
					<OrderInput />
					<OrderStat />
				</Stack>
				<Stack flexGrow={1} bgcolor="background.default" maxWidth="40%">
					<OrderTable />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Order;
//617 + 899 + 301 = 1817
// 301/1817 = 16.6%
// 899/1817 = 49.5%
// 617/1817 = 33.9%

// 899 / 1842 = 48.8%
// 636 / 1842 = 34.6%
// 301 / 1842 = 16.4%

// 316 + 335 = 651 / 899 = 72.6%
// 179 / 899 = 19.9%

//899 + 636 = 1535 + 301 = 1836

//899 / 1535 = 58.4%
// 636 / 1535 = 41.6%
