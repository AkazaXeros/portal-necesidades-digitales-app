// Importing component from React.
import { NavLink } from 'react-router-dom';

// Importing user context.
import { useUser } from '../../context/UserContext';

// Importing custom component.
import MenuHeader from '../MenuUser/MenuHeader';
import MenuUser from '../MenuUser/MenuUser';

// Importing CSS.
import { auth, burguer } from './Auth.module.css';

// Importing component from Material UI.
import { Button } from '@mui/material';

const Auth = () => {
  const { user } = useUser();

  return user ? (
    <MenuUser auth={auth} />
  ) : (
    <div className={auth}>
      <ul>
        <li>
          <Button size="small" color={'secondary'}>
            <NavLink to="/allEntries">Services</NavLink>
          </Button>
        </li>
        <li>
          <Button size="small" color={'secondary'}>
            <NavLink to="/about">About us</NavLink>
          </Button>
        </li>
        <li>
          <Button size="small" color={'secondary'}>
            <NavLink to="/users/login">Login</NavLink>
          </Button>
        </li>
        <li>
          <Button variant="contained" size="small" color={'secondary'}>
            <NavLink to="/users/register">Signup</NavLink>
          </Button>
        </li>
      </ul>
      <MenuHeader className={burguer} />
    </div>
  );
};
export default Auth;
