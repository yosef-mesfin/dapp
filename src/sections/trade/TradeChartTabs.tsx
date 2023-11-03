import {useState} from 'react';

import {Box, Stack, Tab, Tabs} from '@mui/material';
import {styled} from "@mui/material/styles";
import * as React from "react";
import TradingViewChart from "../../components/trade/TradingViewChart";

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
  height:"100%",
  width: '100%',
  ".MuiBox-root":{
    height:"100%",
  }
}));

const TradeChartTabs = ()=>{
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack height="100%">
      <Stack width="100%" sx={{ borderBottom:1, borderColor: "divider", paddingLeft: '14px', }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          sx={{ minHeight: "0px"}}
        >
          <StyledTab disableRipple label="Price" {...a11yProps(0)} />
          <StyledTab disableRipple label="Trading Algorithms" {...a11yProps(1)} />
          <StyledTab disableRipple label="Funding Rate" {...a11yProps(2)} />
        </Tabs>
      </Stack>
      <StyledTabPanel value={value} index={0}  >
        <TradingViewChart/>
      </StyledTabPanel>
    </Stack>
  )
}

export default TradeChartTabs;