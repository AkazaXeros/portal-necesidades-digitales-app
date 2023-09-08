import { useContext } from "react";
import { mainHeader } from "./Header.module.css";

import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  console.log(user);
  return (
    <header className={mainHeader}>
      {user ? (
        <p>
          {user.userName} <button onClick={() => logout()}>🛎️</button>
        </p>
      ) : (
        <>
          <h1>
            <Link to="/">PDN</Link>
          </h1>
          <nav>
            <p>
              <Link to="/users/register">Signup</Link>
            </p>
            <p>
              <Link to="/users/login">Login</Link>
            </p>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
