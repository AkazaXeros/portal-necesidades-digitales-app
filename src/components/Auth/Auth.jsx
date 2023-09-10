import Avatar from "../Avatar/Avatar";
import { auth } from "./Auth.module.css";

import { Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

const Auth = () => {
  const { user, logout } = useUser();

  return user ? (
    <Menu className={auth}>
      <MenuButton as={auth}>
        <Avatar avatar={user.avatar} userName={user.userName} />
      </MenuButton>
      <MenuList>
        <Link to={`/users/${user.id}`}>
          <MenuItem>My Profile</MenuItem>
        </Link>
        <MenuItem>Entries</MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => logout()}>
          <CloseIcon color="red" />
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <ul className={auth}>
      <li>
        <Link to="/users/login">Login</Link>
      </li>
      <li>
        <Button colorScheme="yellow">
          <Link to="/users/register">Signup</Link>
        </Button>
      </li>
    </ul>
  );
};
export default Auth;
