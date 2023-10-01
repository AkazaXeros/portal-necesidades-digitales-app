// Importing React component.
import { Link } from 'react-router-dom';

// Importing custom component.
import Auth from '../Auth/Auth';

// Importing CSS.
import { mainHeader, mainHeaderToolBar } from './Header.module.css';

// Importing Material UI components.
import { AppBar, Box } from '@mui/material';

const Header = () => {
  return (
    <Box className={mainHeader} sx={{ display: 'flex' }}>
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
