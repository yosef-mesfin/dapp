import {Stack, Typography} from "@mui/material";
import {IconStyle} from "./IconStyle";

const Footer = () => {
    return (
        <Stack
            direction="row"
            height="38px"
            bgcolor="background.default"
            alignItems="center"
            justifyContent="flex-start"
            paddingX="21px"
            color="success.main"
            spacing="5px"
        >
            <IconStyle src="/assets/connection.svg" sx={{width: "20px", height:"20px"}}/>
            <Typography variant="body1"> Stable Connection</Typography>
        </Stack>
    );
};

export default Footer;