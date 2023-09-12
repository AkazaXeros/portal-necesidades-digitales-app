import Avatar from "../Avatar/Avatar";
import { auth } from "./Auth.module.css";

import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Auth = () => {
  const { user, logout } = useUser();

  return user ? (
    <div className={auth}>
      <Avatar avatar={user.avatar} userName={user.userName} />

      <span onClick={() => logout()}>❌</span>
    </div>
  ) : (
    <div className={auth}>
      <ul>
        <li>
          <Button size="small">
            <Link to="/users/login">Login</Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" size="small">
            <Link to="/users/register">Signup</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default Auth;
