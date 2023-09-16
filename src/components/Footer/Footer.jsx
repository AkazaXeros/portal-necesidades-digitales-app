import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { mainFooter } from "./Footer.module.css";

const Footer = () => {
  return (
    <Box display="flex" className={mainFooter}>
      <AppBar position="static">
        <Typography variant="p" sx={{ my: 1 }}>
          © {new Date().getFullYear()}, Team Luffy
        </Typography>
      </AppBar>
    </Box>
  );
};
export default Footer;
