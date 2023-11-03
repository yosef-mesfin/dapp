import { Stack } from "@mui/material";
import { OrderNotice } from "../components/trade/order/OrderNotice";
import Order from "../sections/trade/Order";
import Sidebar from "../sections/trade/Sidebar";
import TradeChartTabs from "../sections/trade/TradeChartTabs";
import TradingViewChart from "../components/trade/TradingViewChart";
import {styled} from "@mui/material/styles";

const RootStyle = styled(Stack)(({ theme }) => ({
	height: '100%',
	border: `1px solid ${theme.palette.divider}`,
}));
const Trade = () => {
	return (
		<RootStyle direction="row"  >
			<Stack
				flexGrow={4}
				maxWidth="83%"
				// minWidth="1000px"
				height="100%"
				// bgcolor="common.white"
				direction="column"
			>

				<Stack flexGrow={1} height="100%" paddingLeft="0px">
					<TradeChartTabs/>
				</Stack>
				<OrderNotice />
				<Order />
			</Stack>

			<Stack
				flexGrow={1}
				maxWidth="17%"
				minWidth="310px"
				bgcolor="primary.main"
			>
				<Sidebar />
			</Stack>
		</RootStyle>
	);
};

export default Trade;
