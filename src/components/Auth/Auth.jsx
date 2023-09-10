import Avatar from "../Avatar/Avatar";
import { auth } from "./Auth.module.css";

import { Button } from "@chakra-ui/react";
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
    <div className={auth}>
      <Menu>
        <MenuButton>
          <Avatar avatar={user.avatar} userName={user.userName} />
        </MenuButton>
        <MenuList>
          <Link to={`/users/${user.id}`}>
            <MenuItem>My Profile</MenuItem>
          </Link>
          <MenuItem>Entries</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  ) : (
    <ul className={auth}>
      <li>
        <Link to="/users/login">Login</Link>
      </li>
      <li className="btn">
        <Button size="sm" colorScheme="yellow">
          <Link to="/users/register">Signup</Link>
        </Button>
      </li>
    </ul>
  );
};
export default Auth;
