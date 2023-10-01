// Imporitng CSS
import { mainFooter } from './Footer.module.css';

// Importing Material UI component.
import { AppBar } from '@mui/material';

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
