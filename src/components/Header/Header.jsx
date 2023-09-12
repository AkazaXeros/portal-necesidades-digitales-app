import Auth from "../Auth/Auth";
import { mainHeader } from "./Header.module.css";
import { UserContext } from "../../context/UserContext";

import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <header className={mainHeader}>
      <h1>
        <Link to="/">Wrench</Link>
      </h1>
      <div>
        {user ? (
          <Link to="/entries">
            <p>Services</p>
          </Link>
        ) : null}
        <Auth />
      </div>
    </header>
  );
};

export default Header;
