import Avatar from "../Avatar/Avatar";
import { auth, authMenuItems } from "./Auth.module.css";

import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

import { useUser } from "../../context/UserContext";
import { useState } from "react";

const Auth = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  /* ---------------- Handlers ------------------------ */

  const navigateHandler = () => navigate(`/users/${user.id}`);
  const logoutHandler = () => logout();

  /* ------------------------------------------------- */

  /* --------------------Menu ------------------------ */
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /* ------------------------------------------------- */

  return user ? (
    <Box sx={{ flexGrow: 0 }} className={auth}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar avatar={user.avatar} userName={user.userName} alt="avatar" />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        <MenuItem onClick={handleCloseUserMenu} className={authMenuItems}>
          <Typography textAlign="left" onClick={navigateHandler}>
            My Profile
          </Typography>
          <Typography>
            <Link to={"/entries"}>New Service</Link>
          </Typography>

          <Typography onClick={logoutHandler}>
            Logout
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  ) : (
    <div className={auth}>
      <ul>
        <li>
          <Button size="small" color={"secondary"}>
            <Link to="/users/login">Login</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" size="small" color={"secondary"}>
            <Link to="/users/register">Signup</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default Auth;
