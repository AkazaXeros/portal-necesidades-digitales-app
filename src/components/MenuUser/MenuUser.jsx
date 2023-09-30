import { useUser } from '../../context/UserContext';
import { useFilter } from '../../context/FilterContext';

// Importing React components
import { NavLink, useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';

// Importing Material UI components
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import PostAdd from '@mui/icons-material/PostAdd';

const MenuUser = ({ auth }) => {
  const { user, logout } = useUser();
  const { setCategory } = useFilter();
  const logoutHandler = () => logout();

  const navigate = useNavigate();

  const navigateHandler = (endpoint) => navigate(endpoint);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={auth}>
      <Fragment>
        <Box>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                src={
                  user.avatar &&
                  `${import.meta.env.VITE_BACKEND_URL}/${user.avatar}`
                }
                sx={{ width: 55, height: 55 }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <p
              onClick={() =>
                navigateHandler(`/users/${user.id}/${user.userName}`)
              }
            >
              Profile
            </p>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <p onClick={() => navigateHandler(`/users/password`)}>
              Edit Password
            </p>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <NavLink to="/allEntries" onClick={() => setCategory('')}>
              Services
            </NavLink>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <NavLink to="/about">About us</NavLink>
          </MenuItem>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <PostAdd fontSize="small" />
            </ListItemIcon>
            <NavLink to={'/entries'}>New Service</NavLink>
          </MenuItem>

          <MenuItem onClick={logoutHandler}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Fragment>
    </div>
  );
};

export default MenuUser;
