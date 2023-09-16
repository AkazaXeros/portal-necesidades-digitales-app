import { auth } from './Auth.module.css';

import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { useUser } from '../../context/UserContext';
import Avatar from '../Avatar/Avatar';

const Auth = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  /* ---------------- Handlers ------------------------ */

  const navigateHandler = () => navigate(`/users/${user.id}`);

  const logoutHandler = () => logout();

  /* ------------------------------------------------- */

  return user ? (
    <div className={auth}>
      <div onClick={navigateHandler}>
        <Avatar avatar={user.avatar} userName={user.userName} alt="avatar" />
      </div>
      <span onClick={logoutHandler}>❌</span>
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
