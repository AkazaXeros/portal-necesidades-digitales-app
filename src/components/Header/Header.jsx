import { mainHeader } from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={mainHeader}>
      <h1>
        <Link to="/">PDN</Link>
      </h1>
      <nav>
        <p>
          <Link to="/users/register">Signup</Link>
        </p>
        <span>/</span>
        <p>
          <Link to="/users/login">Login</Link>
        </p>
      </nav>
    </header>
  );
};
export default Header;
