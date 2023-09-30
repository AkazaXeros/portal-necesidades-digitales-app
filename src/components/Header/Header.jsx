// Importing custom components.
import Auth from "../Auth/Auth";
import { mainHeader, mainHeaderToolBar } from "./Header.module.css";

// Importing React component
import { Link } from "react-router-dom";

// Import Materia UI components.
import { AppBar, Box } from "@mui/material";

const Header = () => {
  return (
    <Box className={mainHeader} sx={{ display: "flex" }}>
      <AppBar component="nav" className={mainHeaderToolBar}>
        <h1>
          <Link to="/">WRENCH</Link>
        </h1>
        <Auth />
      </AppBar>
    </Box>
  );
};

export default Header;
