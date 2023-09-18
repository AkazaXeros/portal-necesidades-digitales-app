import Auth from "../Auth/Auth";
import { mainHeader, mainHeaderToolBar } from "./Header.module.css";

import { Link } from "react-router-dom";

import { AppBar, Box } from "@mui/material";
// import MenuUser from "../MenuUser/MenuUser";

const Header = () => {
  return (
    <Box className={mainHeader} sx={{ display: "flex" }}>
      <AppBar component="nav" className={mainHeaderToolBar}>
        <h1>
          <Link to="/">WRENCH</Link>
        </h1>
        <Auth />
        {/* <MenuUser /> */}
      </AppBar>
    </Box>
  );
};

export default Header;
