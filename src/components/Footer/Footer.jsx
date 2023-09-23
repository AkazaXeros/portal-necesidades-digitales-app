import { AppBar } from "@mui/material";
import { mainFooter } from "./Footer.module.css";

const Footer = () => {
  return (
    <AppBar position="static">
      <div className={mainFooter}>
        <p>WRENCH®</p>
        <p>© {new Date().getFullYear()}, Team Luffy</p>
      </div>
    </AppBar>
  );
};
export default Footer;
