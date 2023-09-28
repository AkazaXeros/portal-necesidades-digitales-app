// Importing component from React
import { NavLink } from "react-router-dom";

import { useUser } from "../../context/UserContext";
import MenuUser from "../MenuUser/MenuUser";

// Importing CSS
import { auth } from "./Auth.module.css";

// Importing component from Meterial UI
import { Button } from "@mui/material";

// Creating auth component
const Auth = () => {
  const { user } = useUser();

  return user ? (
    <MenuUser auth={auth} />
  ) : (
    <div className={auth}>
      <ul>
        <li>
          <Button size="small" color={"secondary"}>
            <NavLink to="/entries/allEntries">Services</NavLink>
          </Button>
        </li>
        <li>
          <Button size="small" color={"secondary"}>
            <NavLink to="/users/login">Login</NavLink>
          </Button>
        </li>
        <li>
          <Button variant="contained" size="small" color={"secondary"}>
            <NavLink to="/users/register">Signup</NavLink>
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default Auth;
