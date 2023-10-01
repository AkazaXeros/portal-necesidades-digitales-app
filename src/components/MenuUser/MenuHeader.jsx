// Import hook and component from React.
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// Importing Materia UI components.
import { Button, Menu, MenuItem } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const MenuHeader = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  //--------------Handlers----------------//
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <Button
        color="backup"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuOutlinedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/allEntries">Services</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/about">About us</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/users/login">Login</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/users/register">Signup</NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuHeader;
