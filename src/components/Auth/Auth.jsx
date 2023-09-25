// Importing component from React
import { Link } from "react-router-dom";

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
