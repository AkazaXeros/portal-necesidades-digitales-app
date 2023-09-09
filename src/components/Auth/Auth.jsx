import { auth } from "./Auth.module.css";

import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

import Avatar from "../Avatar/Avatar";

const Auth = () => {
  const { user, logout } = useUser();

  return user ? (
    <section className={auth}>
      <Link to={`/users/${user.id}`}>
        <Avatar avatar={user.avatar} userName={user.userName} />{" "}
      </Link>
      <span onClick={() => logout()}>❌</span>
    </section>
  ) : (
    <ul className={auth}>
      <li>
        <Link to="/users/register">Signup</Link>
      </li>
      <li>
        <Link to="/users/login">Login</Link>
      </li>
    </ul>
  );
};
export default Auth;
